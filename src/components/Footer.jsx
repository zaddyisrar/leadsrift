import Image from "next/image";
import Link from "next/link";

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "Industries", href: "/industries" },
  { label: "Packages", href: "/packages" },
];

const resourceLinks = [
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#03060b] px-6 pt-20 pb-8">
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-300/10 blur-[140px]" />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.025)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-10 h-px max-w-6xl bg-gradient-to-r from-transparent via-cyan-300 to-transparent shadow-[0_0_30px_rgba(34,211,238,0.8)]" />

        <div className="rounded-[2rem] border border-cyan-300/15 bg-white/[0.02] p-8 shadow-[0_0_60px_rgba(34,211,238,0.05)] backdrop-blur-xl md:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div className="pr-8 lg:border-r lg:border-white/10">
              <Link href="/" className="inline-flex">
                <Image
                  src="/leadsrift-logo.png"
                  alt="LeadsRift"
                  width={220}
                  height={70}
                  className="h-10 w-auto object-contain"
                />
              </Link>

              <p className="mt-8 max-w-sm text-lg leading-8 text-gray-300">
                We build outbound systems that generate qualified meetings and
                create predictable pipeline growth.
              </p>

              <div className="mt-8 flex items-center gap-2">
                <div className="h-px w-12 bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.8)]" />
                <div className="h-2 w-2 rounded-full bg-cyan-300" />
              </div>
            </div>

            <div>
              <h4 className="mb-6 text-sm uppercase tracking-[0.2em] text-cyan-300">
                Company
              </h4>

              <div className="space-y-4 text-gray-300">
                {companyLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block transition hover:text-cyan-300"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-6 text-sm uppercase tracking-[0.2em] text-cyan-300">
                Resources
              </h4>

              <div className="space-y-4 text-gray-300">
                {resourceLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block transition hover:text-cyan-300"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-6 text-sm uppercase tracking-[0.2em] text-cyan-300">
                Contact
              </h4>

              <div className="space-y-6">
                <div>
                  <a
                    href="mailto:hello@leadsrift.com"
                    className="text-white transition hover:text-cyan-300"
                  >
                    hello@leadsrift.com
                  </a>

                  <span className="mt-1 block text-sm text-cyan-300">
                    Send us an email
                  </span>
                </div>

                <div>
                  <p className="text-white">Worldwide Remote</p>

                  <span className="text-sm text-gray-400">
                    We work globally
                  </span>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex rounded-full border border-cyan-300/40 px-5 py-2.5 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300 hover:bg-cyan-300/10"
                >
                  Book Strategy Call
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6">
            <div className="flex flex-col items-center justify-between gap-5 text-sm text-gray-400 md:flex-row">
              <p>© 2026 LeadsRift. All rights reserved.</p>

              <div className="flex gap-6">
                <span className="text-gray-500">Privacy</span>
                <span className="text-gray-500">Terms</span>
                <span className="text-gray-500">Cookies</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}