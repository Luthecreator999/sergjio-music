"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_KEYS, t, locales, type Locale, localizedHref } from "@/lib/i18n";

export default function Header({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname() || "/";
  const tr = t(locale);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Build path for the other locale, preserving the route after /xx
  const switchTo = (target: Locale) => {
    const rest = pathname.replace(/^\/(de|en)/, "") || "";
    return `/${target}${rest}`;
  };

  const homeLabel = locale === "de" ? "Home" : "Home";

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container-site flex items-center justify-between h-16 sm:h-20">
        <Link
          href={`/${locale}`}
          className="flex items-center gap-2 group"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/logo.avif"
            alt="Sergjio Music"
            width={36}
            height={36}
            priority
            className="h-8 w-8 sm:h-9 sm:w-9 object-contain"
          />
          <span className="uppercase-brand text-sm sm:text-base text-white">
            Sergjio Music
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link
            href={`/${locale}`}
            className="uppercase-brand text-xs lg:text-sm text-cream hover:text-white transition-colors"
          >
            {homeLabel}
          </Link>
          {NAV_KEYS.map((item) => {
            const isBooking = item.href === "/booking";
            return (
              <Link
                key={item.href}
                href={localizedHref(locale, item.href)}
                className={`uppercase-brand text-xs lg:text-sm transition-colors ${
                  isBooking ? "text-white hover:text-cream" : "text-cream hover:text-white"
                }`}
              >
                {tr.nav[item.key]}
              </Link>
            );
          })}

          <div className="flex items-center gap-1 ml-2 border-l border-[var(--hairline)] pl-4">
            {locales.map((l) => (
              <Link
                key={l}
                href={switchTo(l)}
                aria-label={l === "de" ? "Deutsch" : "English"}
                className={`uppercase-brand text-xs px-2 py-1 transition-colors ${
                  l === locale ? "text-white" : "text-cream/60 hover:text-white"
                }`}
              >
                {l.toUpperCase()}
              </Link>
            ))}
          </div>
        </nav>

        {/* Mobile burger */}
        <button
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
        >
          <span
            className={`block h-[2px] w-6 bg-cream transition-transform ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-cream transition-opacity ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-cream transition-transform ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed inset-x-0 top-16 bottom-0 bg-ink transition-transform duration-300 overflow-y-auto ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-1 p-6">
          <Link
            href={`/${locale}`}
            onClick={() => setOpen(false)}
            className="uppercase-brand text-2xl py-4 border-b border-[var(--hairline)] text-cream"
          >
            {homeLabel}
          </Link>
          {NAV_KEYS.map((item) => {
            const isBooking = item.href === "/booking";
            return (
              <Link
                key={item.href}
                href={localizedHref(locale, item.href)}
                onClick={() => setOpen(false)}
                className={`uppercase-brand text-2xl py-4 border-b border-[var(--hairline)] ${
                  isBooking ? "text-white" : "text-cream"
                }`}
              >
                {tr.nav[item.key]}
              </Link>
            );
          })}

          <div className="flex items-center gap-3 mt-6">
            {locales.map((l) => (
              <Link
                key={l}
                href={switchTo(l)}
                onClick={() => setOpen(false)}
                className={`uppercase-brand text-base px-4 py-2 border ${
                  l === locale ? "border-white text-white" : "border-[var(--hairline)] text-cream/60"
                }`}
              >
                {l.toUpperCase()}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
