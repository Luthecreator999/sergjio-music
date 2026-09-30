import type { Metadata, Viewport } from "next";
import { SITE_URL, OG_IMAGE } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // Every route sets its own full title via generateMetadata; this default
  // only applies to routes without one (e.g. the root redirect / 404).
  title: "Sergjio — Live microtonal instruments inside electronic music",
  description:
    "Sergjio is a Swiss-based live performer and DJ blending Azeri Tar, Saz, Bağlama and Soprano Cornet with electronic music. Bookings worldwide.",
  applicationName: "Sergjio Music",
  openGraph: {
    type: "website",
    siteName: "Sergjio Music",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Sergjio Music" }],
  },
  twitter: { card: "summary_large_image", images: [OG_IMAGE] },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

/**
 * Pass-through root layout. The <html>/<body> shell lives in the locale layout
 * (src/app/[locale]/layout.tsx) so `<html lang>` reflects the real locale, and
 * in the root not-found page (src/app/not-found.tsx). Exactly one pair renders
 * on any route.
 */
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
