import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Packages", href: "/packages" },
  { label: "Reviews", href: "/reviews" },
];

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full px-6 pt-6 md:px-12">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-[22px] border border-cyan-300/45 bg-[#02070b]/78 px-8 py-3.5 shadow-[0_0_16px_rgba(34,211,238,0.22),inset_0_0_22px_rgba(34,211,238,0.045)] backdrop-blur-2xl md:px-12">

        {/* Logo */}

        <Link href="/#home" className="shrink-0">
          <Image
            src="/leadsrift-logo.png"
            alt="LeadsRift"
            width={220}
            height={70}
            priority
            className="h-auto w-[145px] object-contain md:w-[175px]"
          />
        </Link>


        {/* Desktop Links */}

        <div className="hidden items-center gap-9 text-[15px] font-medium text-white/82 md:flex">

          {navLinks.map((item) => (

            <Link
              key={item.href}
              href={item.href}
              className="transition duration-300 hover:text-cyan-300"
            >
              {item.label}
            </Link>

          ))}

        </div>


        {/* CTA */}

        <Link
          href="/contact"
          className="hidden items-center gap-3 rounded-[18px] border border-cyan-300/90 bg-black/35 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_18px_rgba(34,211,238,0.36),inset_0_0_10px_rgba(34,211,238,0.10)] transition duration-300 hover:bg-cyan-300/10 hover:shadow-[0_0_28px_rgba(34,211,238,0.55)] md:inline-flex"
        >
          Book Strategy Call

          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-300 text-sm text-black">
            ↗
          </span>

        </Link>


        {/* Mobile */}

        <Link
          href="/contact"
          className="rounded-xl border border-cyan-300/40 bg-black/40 px-4 py-2 text-sm text-cyan-100 shadow-[0_0_15px_rgba(34,211,238,0.25)] md:hidden"
        >
          Contact
        </Link>

      </nav>
    </header>
  );
}