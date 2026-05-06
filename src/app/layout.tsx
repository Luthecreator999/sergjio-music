import type { Metadata } from "next";
import { Big_Shoulders } from "next/font/google";
import "./globals.css";

const display = Big_Shoulders({
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sergjio Music — Live microtonal instruments inside electronic music",
  description:
    "Sergjio is a Swiss-based live performer and DJ blending Azeri Tar, Saz, Bağlama and Soprano Cornet with electronic music. Bookings worldwide.",
  metadataBase: new URL("https://sergjiomusic.com"),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className={display.variable}>
      <body className="bg-ink text-cream antialiased">{children}</body>
    </html>
  );
}
