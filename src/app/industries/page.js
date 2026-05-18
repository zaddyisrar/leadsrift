import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const industries = [
  {
    category: "Construction & Technical",
    items: [
      "Architecture Firms",
      "Engineering Firms",
      "MEP Consultants",
      "General Contractors",
    ],
  },

  {
    category: "Technology & SaaS",
    items: [
      "B2B SaaS Platforms",
      "Enterprise Software",
      "IT Managed Services",
      "Cybersecurity Firms",
    ],
  },

  {
    category: "Real Estate & Property",
    items: [
      "Commercial Real Estate",
      "Residential Brokers",
      "Property Management",
      "Real Estate Developers",
    ],
  },

  {
    category: "Finance & Lending",
    items: [
      "Financial Advisory",
      "Wealth Management",
      "Private Equity",
      "Business Loan Providers",
    ],
  },

  {
    category: "Automotive",
    items: [
      "New Car Dealerships",
      "Auto Repair & Service",
      "Auto Body Shops",
      "Fleet Management",
    ],
  },

  {
    category: "Logistics & Transportation",
    items: [
      "Freight & Trucking",
      "3PL Providers",
      "Freight Brokers",
      "Supply Chain",
    ],
  },

  {
    category: "Cleaning & Facility Services",
    items: [
      "Commercial Cleaning",
      "Janitorial Services",
      "Industrial Cleaning",
      "Facility Maintenance",
    ],
  },

  {
    category: "Property Services",
    items: [
      "Landscaping",
      "Irrigation Contractors",
      "Handyman Services",
      "Property Repair",
    ],
  },

  {
    category: "Legal Services",
    items: [
      "Corporate Law Firms",
      "Personal Injury",
      "Real Estate Law",
      "Business Litigation",
    ],
  },

  {
    category: "Accounting & Tax",
    items: [
      "CPA Firms",
      "Tax Advisory",
      "Bookkeeping",
      "Audit & Assurance",
    ],
  },

  {
    category: "Business Consulting",
    items: [
      "Management Consulting",
      "Strategic Advisory",
      "Operations Consultants",
      "Executive Coaching",
    ],
  },

  {
    category: "Marketing & Advertising",
    items: [
      "Digital Marketing",
      "SEO & PPC Agencies",
      "Branding Agencies",
      "Performance Marketing",
    ],
  },

  {
    category: "Manufacturing",
    items: [
      "Industrial Manufacturing",
      "OEM Manufacturers",
      "Contract Manufacturers",
      "Heavy Equipment Dealers",
    ],
  },

  {
    category: "Energy & Utilities",
    items: [
      "Renewable Energy",
      "Solar & Wind",
      "Energy Infrastructure",
      "Grid Maintenance",
    ],
  },

  {
    category: "Telecommunications",
    items: [
      "Fiber Installation",
      "Telecom Infrastructure",
      "VoIP Services",
      "Data Centers",
    ],
  },

  {
    category: "Healthcare & Medical",
    items: [
      "Private Practices",
      "Dental Clinics",
      "Specialty Clinics",
      "Medical Billing",
    ],
  },

  {
    category: "Education & Training",
    items: [
      "Corporate Training",
      "Online Education",
      "Certification Providers",
      "EdTech Companies",
    ],
  },

  {
    category: "Hospitality & Hotels",
    items: [
      "Hotels & Resorts",
      "Boutique Hotels",
      "Hospitality Management",
      "Multi-Location Groups",
    ],
  },

  {
    category: "Retail & E-Commerce",
    items: [
      "E-Commerce Brands",
      "Retail Chains",
      "Fulfillment Companies",
      "Product Distributors",
    ],
  },

  {
    category: "Home Improvement",
    items: [
      "Remodeling Companies",
      "Kitchen & Bath Contractors",
      "Custom Home Builders",
      "Restoration Contractors",
    ],
  },

  {
    category: "Security & Surveillance",
    items: [
      "Security System Installers",
      "CCTV Providers",
      "Access Control",
      "Alarm Monitoring",
    ],
  },

  {
    category: "Mortgage & Lending",
    items: [
      "Residential Mortgage",
      "Commercial Lenders",
      "Hard Money Lenders",
      "Equipment Financing",
    ],
  },

  {
    category: "Insurance & Risk",
    items: [
      "Commercial Insurance",
      "Property & Casualty",
      "Health Insurance Brokers",
      "Employee Benefits",
    ],
  },

  {
    category: "Enterprise & Corporate",
    items: [
      "Enterprise Service Providers",
      "Outsourcing Firms",
      "BPO Companies",
      "National Service Providers",
    ],
  },
];

const bestFit = [
  "Businesses where one qualified conversation can create real pipeline value.",
  "Companies with clear offers but inconsistent outbound execution.",
  "Service providers that need appointment flow without building an internal SDR team.",
  "B2B or local businesses that rely on follow-up, trust, and direct conversations.",
];

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-[#05070d] text-white">
      <Navbar />

      <section className="px-6 pt-40 pb-24">
        <div className="mx-auto mb-14 max-w-6xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.45em] text-cyan-300">
            LEADSRIFT INDUSTRIES
          </p>

          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
            Powering Growth Across{" "}
            <span className="text-cyan-300">
              24+ Industries
            </span>
          </h1>
        </div>

        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((group) => (
            <article
              key={group.category}
              className="rounded-[2rem] border border-cyan-300/10 bg-white/[0.03] p-6 transition hover:border-cyan-300/30 hover:bg-cyan-300/[0.04]"
            >
              <h2 className="mb-6 text-xl font-semibold text-cyan-300">
                {group.category}
              </h2>

              <div className="space-y-3">
                {group.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-white/75"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />

                    {item}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-cyan-300/10 bg-cyan-300/[0.03] px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Best Fit
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
              LeadsRift works best when conversations directly create revenue.
            </h2>
          </div>

          <div className="grid gap-4">
            {bestFit.map((item, index) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-2xl border border-cyan-300/10 bg-black/30 p-5 transition hover:border-cyan-300/30 hover:bg-black/50"
              >
                <span className="mt-1 text-sm font-semibold text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="leading-7 text-white/70">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-cyan-300/15 bg-white/[0.03] p-8 text-center shadow-[0_0_70px_rgba(34,211,238,0.08)] md:p-14">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Your industry not listed?
          </p>

          <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
            If your business needs qualified conversations, the system can be adapted.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/60">
            We check your offer, market, sales cycle, and audience before deciding whether outbound makes sense.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-cyan-300 px-8 py-3 text-sm font-semibold text-black transition hover:bg-white"
          >
            Book Free Strategy Call
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}