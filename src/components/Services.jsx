import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 px-6 pt-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-cyan-300/10 bg-[#05070d]/70 px-6 py-4 shadow-[0_0_40px_rgba(34,211,238,0.08)] backdrop-blur-2xl">

        {/* subtle glow line */}
        <div className="absolute inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />

        {/* Logo */}
        <a href="#" className="relative z-10 flex items-center">
          <Image
            src="/leadsrift-logo.png"
            alt="LeadsRift"
            width={180}
            height={45}
            className="h-9 w-auto object-contain"
            priority
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
          <a
            href="#"
            className="transition duration-300 hover:text-cyan-300"
          >
            Home
          </a>

          <a
            href="#services"
            className="transition duration-300 hover:text-cyan-300"
          >
            Services
          </a>

          <a
            href="#process"
            className="transition duration-300 hover:text-cyan-300"
          >
            Process
          </a>

          <a
            href="#industries"
            className="transition duration-300 hover:text-cyan-300"
          >
            Industries
          </a>

          <a
            href="#packages"
            className="transition duration-300 hover:text-cyan-300"
          >
            Packages
          </a>

          <a
            href="#faq"
            className="transition duration-300 hover:text-cyan-300"
          >
            FAQ
          </a>
        </div>

        {/* CTA */}
        <a
          href="#final-cta"
          className="hidden rounded-full border border-cyan-300/25 bg-cyan-300/10 px-5 py-2.5 text-sm font-medium text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.15)] transition duration-300 hover:border-cyan-300/60 hover:bg-cyan-300/20 hover:text-white md:inline-flex"
        >
          Book Strategy Call
        </a>

        {/* Mobile */}
        <button className="rounded-xl border border-cyan-300/20 px-3 py-2 text-sm text-cyan-200 md:hidden">
          Menu
        </button>
      </nav>
    </header>
  );
}