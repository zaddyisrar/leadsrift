"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function AboutPage() {
  const founder = {
    role: "Founder & CEO",
    name: "Syed Hamza Farooq",
    image: "/team/syed-hamza.png",
    desc: "Leading LeadsRift’s vision, outreach systems, and growth strategy with a focus on scalable client acquisition and qualified opportunities.",
    points: ["Leadership", "Strategy", "Growth Systems"],
  };

  const coFounder = {
    role: "Co-Founder at LeadsRift",
    name: "Tayyaba Khan",
    image: "/team/Tayyaba.png",
    desc: "Helping businesses scale through strategic lead generation, client relationships, and outreach systems that turn prospects into qualified opportunities.",
    points: [
      "Business Development",
      "Client Relations",
      "Lead Generation",
      "Growth Systems",
    ],
    linkedin: "https://www.linkedin.com/in/tayyaba-khan-156288123",
  };

  const team = [
    {
      name: "Zaddy Israr",
      role: "Social Media Manager",
      image: "/team/zaddy-israr.png",
      desc: "Managing LeadsRift’s content strategy, social presence, and digital brand growth.",
    },
    {
      name: "Muhammad Asim",
      role: "Senior Closer",
      image: "/team/muhammad-asim.png",
      desc: "Supporting campaign execution, CRM workflows, and daily outreach operations.",
    },
    {
      name: "Shahzaib abbas",
      role: "Lead generation specialist",
      image: "/team/Shahzaib-abbas.jpeg",
      desc: "Handling live prospect conversations and appointment-setting workflows.",
    },
    {
      name: "Labeeb Khattak",
      role: "LinkedIn Outreach Specialist",
      image: "/team/Labeeb-khattak.png",
      desc: "Building professional conversations through targeted LinkedIn outreach.",
    },
    {
      name: "Sameen Khan",
      role: "Operation Manager",
      image: "/team/Sameen-khan.png",
      desc: "Managing email campaigns, follow-ups, and prospect engagement.",
    },
    {
      name: "Ammar Faraz",
      role: "Business Development Specialist",
      image: "/team/Ammar-Faraz.png",
      desc: "Researching and organizing high-fit prospects for outreach campaigns.",
    },
    {
      name: "Hiba Tahir",
      role: "Lead Generation Specialist",
      image: "/team/member-07.png",
      desc: "Helping convert prospect interest into booked qualified appointments.",
    },
    {
      name: "Pascal",
      role: "CRM Specialist",
      image: "/team/Pascal.png",
      desc: "Keeping pipelines, follow-ups, and lead data organized inside CRM systems.",
    },
    {
      name: "Team Member",
      role: "Follow-Up Specialist",
      image: "/team/member-09.png",
      desc: "Managing prospect follow-ups so opportunities do not slip away.",
    },
    {
      name: "Team Member",
      role: "Campaign Coordinator",
      image: "/team/member-10.png",
      desc: "Coordinating outreach campaigns and keeping execution aligned.",
    },
    {
      name: "Team Member",
      role: "Data Researcher",
      image: "/team/member-11.png",
      desc: "Finding, verifying, and organizing prospect information for campaigns.",
    },
    {
      name: "Team Member",
      role: "Client Success Support",
      image: "/team/member-12.png",
      desc: "Supporting client communication, reporting, and service delivery.",
    },
    {
      name: "Team Member",
      role: "Outreach Assistant",
      image: "/team/member-13.png",
      desc: "Assisting outreach workflows, lead updates, and campaign support tasks.",
    },
    {
      name: "Team Member",
      role: "Growth Assistant",
      image: "/team/member-14.png",
      desc: "Supporting growth operations, research, and campaign improvements.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#03060b] text-white">
        {/* ABOUT HERO */}
        <section className="relative overflow-hidden border-b border-cyan-500/10 px-6 pb-28 pt-40">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />
          <div className="absolute left-0 top-20 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[130px]" />
          <div className="absolute right-0 top-10 h-[360px] w-[360px] rounded-full bg-cyan-300/10 blur-[120px]" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
            <div>
              <p className="mb-5 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200">
                ABOUT LEADSRIFT
              </p>

              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
                Remote Outreach Built To Turn Cold Prospects Into{" "}
                <span className="text-cyan-300">Qualified Opportunities</span>
              </h1>

              <div className="mt-8 max-w-2xl space-y-5 text-base leading-8 text-slate-300 md:text-lg">
                <p>
                  LeadsRift is a remote outreach and appointment-setting company
                  built to help businesses turn cold prospects into qualified
                  opportunities.
                </p>

                <p>
                  We partner with service-based companies that want predictable
                  growth without the time and overhead of building an in-house
                  sales team. From cold calling and email outreach to lead
                  generation, follow-ups, and appointment setting, we handle the
                  outreach process so you can stay focused on closing deals.
                </p>
              </div>
            </div>

            {/* RIGHT HERO VISUAL */}
            <div className="relative hidden min-h-[500px] lg:block">
              <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/10 bg-cyan-300/[0.03] shadow-[inset_0_0_90px_rgba(34,211,238,0.08),0_0_110px_rgba(34,211,238,0.18)]" />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-cyan-300/10"
              />

              <motion.div
                animate={{ y: [0, -18, 0], rotate: [0, 2, 0] }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 top-1/2 flex h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 items-center justify-center"
              >
                <div className="absolute h-[520px] w-[520px] rounded-full bg-cyan-300/15 blur-[120px]" />
                <div className="absolute h-[320px] w-[320px] rounded-full bg-cyan-300/20 blur-[70px]" />

                <Image
                  src="/leadsrift-symbol.png"
                  alt="LeadsRift"
                  width={255}
                  height={255}
                  priority
                  className="relative z-20 brightness-125 drop-shadow-[0_0_70px_rgba(34,211,238,0.95)]"
                />
              </motion.div>

              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 4.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-6 top-16 rounded-3xl border border-cyan-300/20 bg-[#071019]/85 px-6 py-5 shadow-[0_0_45px_rgba(34,211,238,0.16)] backdrop-blur-xl"
              >
                <p className="text-3xl font-semibold text-white">30,061+</p>
                <p className="mt-1 text-sm text-cyan-100/80">Emails Sent</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 14, 0] }}
                transition={{
                  duration: 4.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-4 top-32 rounded-3xl border border-cyan-300/20 bg-[#071019]/85 px-6 py-5 shadow-[0_0_45px_rgba(34,211,238,0.16)] backdrop-blur-xl"
              >
                <p className="text-3xl font-semibold text-white">1,629</p>
                <p className="mt-1 text-sm text-cyan-100/80">Replies Tracked</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 5.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-14 left-12 rounded-3xl border border-cyan-300/20 bg-[#071019]/85 px-6 py-5 shadow-[0_0_45px_rgba(34,211,238,0.16)] backdrop-blur-xl"
              >
                <p className="text-3xl font-semibold text-white">200+</p>
                <p className="mt-1 text-sm text-cyan-100/80">
                  Accepted Opportunities
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section className="relative overflow-hidden px-6 py-28">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.025)_1px,transparent_1px)] bg-[size:54px_54px]" />
          <div className="absolute left-1/2 top-0 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[150px]" />

          <div className="relative mx-auto max-w-7xl">
            <div className="mb-14 text-center">
              <p className="mb-4 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200">
                OUR TEAM
              </p>

              <h2 className="text-4xl font-semibold md:text-6xl">
                The People Behind{" "}
                <span className="text-cyan-300">LeadsRift</span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-slate-400">
                A focused team building outreach systems that create real
                conversations and qualified opportunities.
              </p>
            </div>

            {/* FOUNDER + CO-FOUNDER ROW */}
            <div className="mb-16 grid gap-6 lg:grid-cols-2">
              <FeatureCard
                person={founder}
                label="FOUNDER"
                imageSide="right"
                priority
              />

              <FeatureCard
                person={coFounder}
                label="CO-FOUNDER"
                imageSide="left"
              />
            </div>

            {/* TEAM GRID */}
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {team.map((member, index) => (
                <div
                  key={`${member.role}-${index}`}
                  className="group relative overflow-hidden rounded-[1.5rem] border border-cyan-300/15 bg-white/[0.03] p-3 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:shadow-[0_0_45px_rgba(34,211,238,0.12)]"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(34,211,238,0.12),transparent_35%)] opacity-0 transition group-hover:opacity-100" />

                  <div className="relative aspect-[1/1.08] overflow-hidden rounded-[1.2rem] border border-cyan-300/10 bg-[#020811]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-center transition duration-500 group-hover:scale-[1.04]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#03060b] via-[#03060b]/15 to-transparent" />
                  </div>

                  <div className="relative pt-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-300">
                      {member.role}
                    </p>

                    <h3 className="mt-2 text-lg font-semibold text-white">
                      {member.name}
                    </h3>

                    <p className="mt-3 min-h-[78px] text-xs leading-6 text-slate-400">
                      {member.desc}
                    </p>

                    <div className="origin-left scale-[0.82]">
                      <SocialIcons small />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function FeatureCard({ person, label, imageSide = "right", priority = false }) {
  const imageFirst = imageSide === "left";

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-cyan-300/15 bg-white/[0.03] shadow-[0_0_70px_rgba(34,211,238,0.06)] backdrop-blur-xl">
      <div
        className={`absolute inset-0 ${
          imageFirst
            ? "bg-[radial-gradient(circle_at_25%_35%,rgba(34,211,238,0.14),transparent_35%)]"
            : "bg-[radial-gradient(circle_at_75%_35%,rgba(34,211,238,0.14),transparent_35%)]"
        }`}
      />

      <div
        className={`absolute top-0 h-full w-[55%] bg-cyan-300/8 ${
          imageFirst
            ? "-left-28 skew-x-[14deg]"
            : "-right-28 skew-x-[-14deg]"
        }`}
      />

      <div className="relative grid min-h-[420px] items-center gap-6 p-6 md:p-8 lg:grid-cols-2">
        <div className={imageFirst ? "order-2 lg:order-2" : ""}>
          <div
            className={`absolute top-0 text-5xl font-black tracking-tight text-white/[0.03] md:text-6xl ${
              imageFirst ? "right-6" : "-top-3 left-6"
            }`}
          >
            {label}
          </div>

          <p className="relative text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
            {person.role}
          </p>

          <h3 className="relative mt-4 text-3xl font-semibold md:text-4xl">
            {person.name}
          </h3>

          <p className="relative mt-4 max-w-xl text-sm leading-7 text-slate-300">
            {person.desc}
          </p>

          <div className="relative mt-6 flex flex-wrap gap-2">
            {person.points.map((point) => (
              <span
                key={point}
                className="rounded-full border border-cyan-300/15 bg-cyan-300/5 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-100/80"
              >
                {point}
              </span>
            ))}
          </div>

          <SocialIcons linkedin={person.linkedin} />
        </div>

        <div
          className={`relative flex min-h-[300px] items-center justify-center ${
            imageFirst ? "order-1 lg:order-1" : ""
          }`}
        >
          <div className="absolute h-[250px] w-[250px] rounded-full border border-cyan-300/20 bg-cyan-300/5 shadow-[0_0_80px_rgba(34,211,238,0.14)]" />
          <div className="absolute h-[190px] w-[190px] rounded-full bg-cyan-300/10 blur-[60px]" />

          <div className="relative aspect-square w-full max-w-[280px] overflow-hidden rounded-[1.6rem] border border-cyan-300/15 bg-[#030811]/80">
            <Image
              src={person.image}
              alt={person.name}
              fill
              priority={priority}
              className="object-cover object-center transition duration-500 hover:scale-[1.03]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#03060b]/70 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}

function SocialIcons({ small = false, linkedin = "#" }) {
  const sizeClass = small ? "h-9 w-9" : "h-10 w-10";

  return (
    <div className="mt-6 flex gap-3">
      <a
        href="#"
        className={`${sizeClass} flex items-center justify-center rounded-full border border-cyan-300/15 bg-cyan-300/5 text-cyan-200 transition hover:bg-cyan-300/10 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]`}
      >
        <FaFacebookF size={small ? 13 : 14} />
      </a>

      <a
        href="#"
        className={`${sizeClass} flex items-center justify-center rounded-full border border-cyan-300/15 bg-cyan-300/5 text-cyan-200 transition hover:bg-cyan-300/10 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]`}
      >
        <FaInstagram size={small ? 13 : 14} />
      </a>

      <a
        href="#"
        className={`${sizeClass} flex items-center justify-center rounded-full border border-cyan-300/15 bg-cyan-300/5 text-cyan-200 transition hover:bg-cyan-300/10 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]`}
      >
        <FaXTwitter size={small ? 13 : 14} />
      </a>

      <a
        href={linkedin}
        target="_blank"
        rel="noreferrer"
        className={`${sizeClass} flex items-center justify-center rounded-full border border-cyan-300/15 bg-cyan-300/5 text-cyan-200 transition hover:bg-cyan-300/10 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]`}
      >
        <FaLinkedinIn size={small ? 13 : 14} />
      </a>
    </div>
  );
}