import Link from "next/link";
import { display } from "@/lib/font";
import { defaultLocale } from "@/lib/i18n";

/**
 * Root 404. Because the root layout is a pass-through (the document shell lives
 * in the locale layout), this page renders its own <html>/<body>.
 */
export default function NotFound() {
  return (
    <html lang={defaultLocale} className={display.variable} data-scroll-behavior="smooth">
      <body className="bg-ink text-cream antialiased">
        <main className="min-h-screen flex flex-col items-center justify-center gap-6 text-center px-6">
          <h1 className="uppercase-brand text-display-lg text-white">404</h1>
          <p className="uppercase-brand text-sm text-cream/70">
            Seite nicht gefunden · Page not found
          </p>
          <Link href={`/${defaultLocale}`} className="btn">
            Home
          </Link>
        </main>
      </body>
    </html>
  );
}
