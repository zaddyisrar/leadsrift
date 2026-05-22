import Image from "next/image";
import Link from "next/link";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

const socials = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61578643498934",
    icon: <FaFacebookF />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/leadsrift/",
    icon: <FaInstagram />,
  },
  {
    name: "X",
    href: "https://x.com/leadsrift",
    icon: <FaXTwitter />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/leadsrift1/",
    icon: <FaLinkedinIn />,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@leadsrift",
    icon: <FaTiktok />,
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#03060b] px-4 pb-6 pt-12 sm:px-6 md:pb-8 md:pt-20">
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-300/10 blur-[110px] md:h-96 md:w-96 md:blur-[140px]" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.025)_1px,transparent_1px)] bg-[size:56px_56px] md:bg-[size:80px_80px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-7 h-px max-w-6xl bg-gradient-to-r from-transparent via-cyan-300 to-transparent shadow-[0_0_30px_rgba(34,211,238,0.8)] md:mb-10" />

        <div className="rounded-[1.6rem] border border-cyan-300/15 bg-white/[0.02] p-5 shadow-[0_0_60px_rgba(34,211,238,0.05)] backdrop-blur-xl md:rounded-[2rem] md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-10">
            <div className="lg:border-r lg:border-white/10 lg:pr-8">
              <Image
                src="/leadsrift-logo.png"
                alt="LeadsRift"
                width={180}
                height={60}
                className="h-9 w-auto md:h-10"
              />

              <p className="mt-5 max-w-sm text-sm leading-7 text-gray-300 md:mt-8 md:text-lg md:leading-8">
                We book qualified sales appointments for service businesses
                without hiring an in-house sales team.
              </p>

              <div className="mt-6 md:mt-10">
                <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-cyan-300 md:mb-5 md:text-xs md:tracking-[0.3em]">
                  CONNECT WITH US
                </p>

                <div className="flex flex-wrap gap-2.5 md:gap-3">
                  {socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="group flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-300/15 bg-white/[0.03] text-cyan-300 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.25)] md:h-11 md:w-11"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 lg:contents">
              <div>
                <h4 className="mb-4 text-xs uppercase tracking-[0.2em] text-cyan-300 md:mb-6 md:text-sm">
                  Company
                </h4>

                <div className="space-y-3 text-sm text-gray-300 md:space-y-4 md:text-base">
                  <Link href="/" className="block hover:text-cyan-300">
                    Home
                  </Link>

                  <Link href="/about" className="block hover:text-cyan-300">
                    About
                  </Link>

                  <Link href="/services" className="block hover:text-cyan-300">
                    Services
                  </Link>

                  <Link
                    href="/industries"
                    className="block hover:text-cyan-300"
                  >
                    Industries
                  </Link>

                  <Link href="/packages" className="block hover:text-cyan-300">
                    Packages
                  </Link>

                  <Link href="/reviews" className="block hover:text-cyan-300">
                    Reviews
                  </Link>

                  <Link href="/contact" className="block hover:text-cyan-300">
                    Contact
                  </Link>
                </div>
              </div>

              <div>
                <h4 className="mb-4 text-xs uppercase tracking-[0.2em] text-cyan-300 md:mb-6 md:text-sm">
                  Services
                </h4>

                <div className="space-y-3 text-sm text-gray-300 md:space-y-4 md:text-base">
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
            </div>

            <div>
              <h4 className="mb-4 text-xs uppercase tracking-[0.2em] text-cyan-300 md:mb-6 md:text-sm">
                Contact
              </h4>

              <div className="space-y-4 md:space-y-6">
                <div>
                  <p className="text-sm text-white md:text-base">
                    info@leadsrift.com
                  </p>
                  <span className="text-xs text-cyan-300 md:text-sm">
                    Business Email
                  </span>
                </div>

                <div>
                  <p className="text-sm text-white md:text-base">
                    +1 (575) 414-8669
                  </p>
                  <span className="text-xs text-gray-400 md:text-sm">
                    Contact Number
                  </span>
                </div>

                <div>
                  <p className="text-sm leading-6 text-white md:text-base md:leading-7">
                    1209 Mountain Rd Pl NE STE R
                    <br />
                    Albuquerque, NM 87110, USA
                  </p>

                  <span className="text-xs text-gray-400 md:text-sm">
                    Global Operations
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-5 md:mt-10 md:pt-6">
            <div className="flex flex-col items-center justify-between gap-5 text-center text-xs text-gray-400 md:flex-row md:text-sm">
              <p>© 2026 LeadsRift LLC. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}