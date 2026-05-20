"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Packages", href: "/packages" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4 md:px-12 md:pt-6">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-[22px] border border-cyan-300/35 bg-[#02070b]/85 px-5 py-3 shadow-[0_0_16px_rgba(34,211,238,0.22),inset_0_0_22px_rgba(34,211,238,0.045)] backdrop-blur-2xl md:px-12 md:py-3.5">
        <Link href="/#home" className="shrink-0" onClick={() => setOpen(false)}>
          <Image
            src="/leadsrift-logo.png"
            alt="LeadsRift"
            width={220}
            height={70}
            priority
            className="h-auto w-[135px] object-contain md:w-[175px]"
          />
        </Link>

        <div className="hidden items-center gap-9 text-[15px] font-medium md:flex">
          {navLinks.map((item) => {
            const active =
              item.href === "/#home" ? pathname === "/" : pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative py-2 transition duration-300 ${
                  active ? "text-cyan-300" : "text-white/82 hover:text-cyan-300"
                }`}
              >
                {item.label}

                <span
                  className={`absolute -bottom-[6px] left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.95)] transition-all duration-500 ease-out ${
                    active
                      ? "w-8 opacity-100"
                      : "w-0 opacity-0 group-hover:w-8 group-hover:opacity-100"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        <Link
          href="/contact"
          className="hidden items-center gap-3 rounded-[18px] border border-cyan-300/90 bg-black/35 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_18px_rgba(34,211,238,0.36),inset_0_0_10px_rgba(34,211,238,0.10)] transition duration-300 hover:bg-cyan-300/10 hover:shadow-[0_0_28px_rgba(34,211,238,0.55)] md:inline-flex"
        >
          Book Strategy Call
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-300 text-sm text-black">
            ↗
          </span>
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/35 bg-black/40 text-cyan-100 shadow-[0_0_15px_rgba(34,211,238,0.20)] md:hidden"
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-3 max-w-7xl rounded-[22px] border border-cyan-300/25 bg-[#02070b]/95 p-4 shadow-[0_0_30px_rgba(34,211,238,0.18)] backdrop-blur-2xl md:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl border border-cyan-300/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-white/85 transition hover:bg-cyan-300/10 hover:text-cyan-200"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-2xl bg-cyan-300 px-4 py-3 text-center text-sm font-bold text-black"
            >
              Book Strategy Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}