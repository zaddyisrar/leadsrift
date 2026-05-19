"use client";

import Image from "next/image";

const companies = [
  { name: "Seagull Cleaning Services", logo: "/logos/seagull.png" },
  { name: "Capital Facilities", logo: "/logos/capital.png" },
  { name: "Multycerv Janitorial Services", logo: "/logos/multycerv.png" },
  { name: "Jaguar Cleaning Services Corp", logo: "/logos/jaguar.png" },
  { name: "Premium Maintenance Services", logo: "/logos/premium.png" },
  { name: "HereWeGo LLC", logo: "/logos/herewego.png" },
  { name: "Boston Cleaning Company", logo: "/logos/boston.png" },
  { name: "I & G Cleaning Services", logo: "/logos/iandg.png" },
  { name: "Optimal Cleaning Services", logo: "/logos/optimal.png" },
  { name: "Tetra Maintenance", logo: "/logos/tetra.png" },
  { name: "New Moon Janitorial", logo: "/logos/newmoon.png" },
  { name: "All Janitorial Service", logo: "/logos/alljanitorial.png" },
  { name: "Stratus Building Solutions", logo: "/logos/stratus.png" },
  { name: "Smoky Mountain Commercial", logo: "/logos/smoky.png" },
  { name: "WipeOut Janitorial", logo: "/logos/wipeout.png" },
  { name: "B.A.M Cleaning Company", logo: "/logos/bam.png" },
  { name: "Spot It Cleaning Services", logo: "/logos/spotit.png" },
  { name: "Hero Cleaning", logo: "/logos/hero.png" },
  { name: "Dust Details", logo: "/logos/dustdetails.png" },
];

const rowOne = companies.slice(0, 9);
const rowTwo = companies.slice(9);

function LogoRow({ items, reverse = false }) {
  const marqueeItems = [...items, ...items];

  return (
    <div className="relative overflow-hidden">
      <div
        className={`flex w-max items-center gap-5 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {marqueeItems.map((company, index) => (
          <div
            key={`${company.name}-${index}`}
            className="flex h-28 min-w-[280px] items-center justify-center rounded-[1.7rem] border border-white/10 bg-black/25 px-8 transition duration-300 hover:border-cyan-300/40 hover:bg-cyan-300/[0.04]"
          >
            <Image
              src={company.logo}
              alt={company.name}
              width={220}
              height={100}
              unoptimized
              className="max-h-20 w-auto object-contain opacity-90 transition duration-300 hover:scale-110 hover:opacity-100"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProofBar() {
  return (
    <section className="relative overflow-hidden border-b border-cyan-500/10 bg-[#03060b] px-6 py-16">
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <p className="mb-3 text-xs font-semibold tracking-[0.35em] text-cyan-300">
            OUR CLIENTS
          </p>

          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            The Choice of Market Pioneers
          </h2>
        </div>

        <div className="relative mt-10 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] px-0 py-6 backdrop-blur-xl">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-28 bg-gradient-to-r from-[#03060b] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-28 bg-gradient-to-l from-[#03060b] to-transparent" />

          <div className="space-y-5">
            <LogoRow items={rowOne} />
            <LogoRow items={rowTwo} reverse />
          </div>
        </div>
      </div>
    </section>
  );
}