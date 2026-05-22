import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "LeadsRift | Done-For-You Outbound Growth Systems",
  description:
    "LeadsRift helps businesses generate qualified appointments through cold calling, email outreach, LinkedIn prospecting, lead qualification, follow-ups, CRM management, and outbound growth systems.",
  keywords: [
    "Lead Generation",
    "Appointment Setting",
    "Cold Calling",
    "Email Outreach",
    "LinkedIn Outreach",
    "B2B Lead Generation",
    "Outbound Growth Systems",
    "CRM Follow Up",
    "Sales Pipeline",
    "LeadsRift",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "LeadsRift | Done-For-You Outbound Growth Systems",
    description:
      "Turn cold outreach into qualified appointments with scalable outbound systems.",
    url: "https://beta.leadsrift.com",
    siteName: "LeadsRift",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LeadsRift - Done-For-You Outbound Growth Systems",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LeadsRift | Done-For-You Outbound Growth Systems",
    description: "Turn cold outreach into qualified appointments.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full overflow-x-hidden bg-[#05070d] text-white">
        {children}
      </body>
    </html>
  );
}