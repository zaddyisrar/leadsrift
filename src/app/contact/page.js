"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const stats = [
  "30,061+ Emails Sent",
  "6,523 Opens Generated",
  "1,629 Replies Tracked",
  "200+ Accepted Opportunities",
];

const contactFlow = [
  "Tell us about your business and current pipeline.",
  "We review your offer, audience, and growth goals.",
  "We map the best outbound system for your stage.",
  "If it makes sense, we move into setup and launch.",
];

const services = [
  "Cold Calling",
  "Email Outreach",
  "LinkedIn Outreach",
  "Lead Qualification",
  "CRM & Follow-Up Management",
  "Appointment Setting",
  "Full Outbound System",
];

const initialForm = {
  name: "",
  email: "",
  company: "",
  appointments: "",
  budget: "",
  industry: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const errors = useMemo(() => {
    const nextErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = "Name is required.";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Valid email required (name@example.com).";
    }
    if (!form.appointments) {
      nextErrors.appointments = "Please select appointments requirement.";
    }

    if (!form.budget) {
      nextErrors.budget = "Please select budget.";
    }

    if (!form.industry) {
      nextErrors.industry = "Please select industry.";
    }

    return nextErrors;
  }, [form]);

  const isValid = Object.keys(errors).length === 0;

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleBlur(e) {
    const { name } = e.target;

    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setTouched({
      name: true,
      email: true,
      company: true,
      appointments: true,
      budget: true,
      industry: true,
      message: true,
    });

    if (!isValid) return;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Failed to send inquiry.");
      }

      setSubmitted(true);
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  }

  function fieldClass(field) {
    const hasError = touched[field] && errors[field];

    return `w-full rounded-2xl border bg-black/35 px-5 py-4 text-sm text-white outline-none transition placeholder:text-white/30 ${
      hasError
        ? "border-red-400/70 focus:border-red-300"
        : "border-cyan-300/10 focus:border-cyan-300/50"
    }`;
  }

  function ErrorMessage({ field }) {
    if (!touched[field] || !errors[field]) return null;

    return (
      <p className="mt-2 text-xs font-medium text-red-300">
        {errors[field]}
      </p>
    );
  }

  return (
    <main className="min-h-screen bg-[#05070d] text-white">
      <Navbar />

      <section className="relative overflow-hidden px-6 pt-44 pb-24 md:pt-48">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.035)_1px,transparent_1px)] bg-[size:70px_70px]" />
        <div className="pointer-events-none absolute left-1/2 top-24 h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="pointer-events-none absolute left-[-140px] top-56 h-80 w-80 rounded-full border border-cyan-300/10" />
        <div className="pointer-events-none absolute right-[-140px] bottom-10 h-80 w-80 rounded-full border border-cyan-300/10" />

        <div className="relative mx-auto max-w-6xl text-center">
          <p className="mb-10 text-sm font-semibold uppercase tracking-[0.5em] text-cyan-300">
            LEADSRIFT CONTACT
          </p>

          <h1 className="mx-auto max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
            Ready to build your outbound growth system?
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
            Tell us where your pipeline is stuck. We’ll help map the right
            system for outreach, qualification, follow-up, and booked
            appointments.
          </p>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <div className="rounded-[2rem] border border-cyan-300/10 bg-white/[0.03] p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                What happens next
              </p>

              <h2 className="mt-5 text-3xl font-semibold leading-tight">
                Simple conversation first. No messy sales pressure.
              </h2>

              <div className="mt-7 space-y-4">
                {contactFlow.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 rounded-2xl border border-cyan-300/10 bg-black/25 p-5"
                  >
                    <span className="mt-1 text-sm font-semibold text-cyan-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="leading-7 text-white/70">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <div
                  key={stat}
                  className="rounded-2xl border border-cyan-300/10 bg-white/[0.03] px-5 py-5 text-center"
                >
                  <p className="text-sm font-semibold text-cyan-200">{stat}</p>
                </div>
              ))}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="relative overflow-hidden rounded-[2rem] border border-cyan-300/15 bg-white/[0.04] p-7 shadow-[0_0_70px_rgba(34,211,238,0.08)]"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative">
              {submitted ? (
                <div className="flex min-h-[620px] flex-col items-center justify-center text-center">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-4xl text-cyan-300 shadow-[0_0_45px_rgba(34,211,238,0.18)]">
                    ✓
                  </div>

                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                    Booking Confirmed
                  </p>

                  <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-4xl">
                    Your details are locked in.
                  </h2>

                  <p className="mt-4 max-w-md leading-7 text-white/60">
                    Check your email for details. We’ll reach out within 24
                    hours.
                  </p>

                  <Link
                    href="/"
                    className="mt-8 inline-flex rounded-full bg-cyan-300 px-8 py-4 text-sm font-semibold text-black shadow-[0_0_35px_rgba(34,211,238,0.25)] transition hover:bg-white"
                  >
                    Back to Home
                  </Link>
                </div>
              ) : (
                <>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                    Start here
                  </p>

                  <h2 className="mt-5 text-3xl font-semibold leading-tight">
                    Send your project details.
                  </h2>

                  <p className="mt-4 leading-7 text-white/60">
                    Share the basics. We’ll use this to understand if outbound is
                    the right move for your business.
                  </p>

                  <div className="mt-8 grid gap-5">
                    <div>
                      <label className="mb-2 block text-sm text-white/70">
                        Name
                      </label>
                      <input
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Your name"
                        className={fieldClass("name")}
                      />
                      <ErrorMessage field="name" />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm text-white/70">
                        Email
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="you@company.com"
                        className={fieldClass("email")}
                      />
                      <ErrorMessage field="email" />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm text-white/70">
                        Company{" "}
                        <span className="text-white/35">(Optional)</span>
                      </label>
                      <input
                        name="company"
                        type="text"
                        value={form.company}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Company name"
                        className={fieldClass("company")}
                      />
                    </div>
                    
                    <div>
                      <label className="mb-2 block text-sm text-white/70">
                        How Many Appointments or Leads Do You Need Per Month?
                      </label>

                      <select
                        name="appointments"
                        value={form.appointments}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={fieldClass("appointments")}
                      >
                        <option value="">Select Option</option>
                        <option>5–10</option>
                        <option>10–25</option>
                        <option>25–50</option>
                        <option>50+</option>
                      </select>

                      <ErrorMessage field="appointments" />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm text-white/70">
                        Monthly Marketing / Lead Gen Budget
                      </label>

                      <select
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={fieldClass("budget")}
                      >
                        <option value="">Select Budget</option>
                        <option>Under $500</option>
                        <option>$500–$1,500</option>
                        <option>$1,500–$5,000</option>
                        <option>$5,000+</option>
                      </select>

                      <ErrorMessage field="budget" />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm text-white/70">
                        What Industry Are You In?
                      </label>

                      <select
                        name="industry"
                        value={form.industry}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={fieldClass("industry")}
                      >
                        <option value="">Select Industry</option>
                        <option>Commercial Cleaning</option>
                        <option>Roofing</option>
                        <option>Solar</option>
                        <option>Real Estate</option>
                        <option>Engineering</option>
                        <option>Home Services</option>
                        <option>SaaS</option>
                        <option>Recruiting</option>
                        <option>Other</option>
                      </select>

                      <ErrorMessage field="industry" />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm text-white/70">
                        Message{" "}
                        <span className="text-white/35">(Optional)</span>
                      </label>
                      <textarea
                        name="message"
                        rows="6"
                        value={form.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Tell us about your offer, audience, and growth goals..."
                        className={`${fieldClass("message")} resize-none`}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={!isValid}
                      className={`rounded-full px-8 py-4 text-sm font-semibold shadow-[0_0_35px_rgba(34,211,238,0.25)] transition ${
                        isValid
                          ? "bg-cyan-300 text-black hover:bg-white"
                          : "cursor-not-allowed border border-white/10 bg-white/10 text-white/35"
                      }`}
                    >
                      Confirm Booking
                    </button>

                    <p className="text-center text-xs leading-6 text-white/40">
                      This form is visual for now. We’ll connect submission
                      handling in the next phase.
                    </p>
                  </div>
                </>
              )}
            </div>
          </form>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-cyan-300/15 bg-white/[0.03] p-8 text-center shadow-[0_0_70px_rgba(34,211,238,0.08)] md:p-14">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Prefer to explore first?
          </p>

          <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
            Review the services before sending details.
          </h2>

          <Link
            href="/services"
            className="mt-8 inline-flex rounded-full border border-cyan-300/30 px-8 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300/70 hover:bg-cyan-300/10"
          >
            View Services
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}