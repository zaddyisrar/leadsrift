import Navbar from "@/components/Navbar";
import Packages from "@/components/Packages";
import Footer from "@/components/Footer";

const included = [
  "Lead List Building",
  "Cold Calling",
  "Email Outreach",
  "LinkedIn Outreach",
  "CRM Tracking",
  "Follow-Up Management",
  "Appointment Setting",
  "Weekly Reporting",
];

export default function PackagesPage() {
  return (
    <main className="min-h-screen bg-[#03060b] text-white">
      <Navbar />

      {/* Homepage Packages Section */}
      <div className="pt-24">
        <Packages />
      </div>

      <Footer />
    </main>
  );
}