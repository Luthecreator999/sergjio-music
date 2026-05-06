import Link from "next/link";
import { SITE } from "@/lib/site";
import SocialIcon, { type SocialNetwork } from "@/components/SocialIcon";
import { NAV_KEYS, t, type Locale, localizedHref } from "@/lib/i18n";

export default function Footer({ locale }: { locale: Locale }) {
  const tr = t(locale);

  return (
    <footer className="border-t border-[var(--hairline)] mt-24 sm:mt-32">
      <div className="container-site py-16 sm:py-20 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <Link href={`/${locale}`} className="uppercase-brand text-2xl text-white">
            {SITE.name}
          </Link>
          <p className="mt-4 max-w-sm text-sm text-cream/60 leading-relaxed normal-case font-normal">
            {tr.footer.description}
          </p>
        </div>

        <div>
          <h4 className="uppercase-brand text-xs text-white mb-4">{tr.footer.listenOn}</h4>
          <ul className="space-y-3 text-xs">
            {Object.values(SITE.streaming).map((s) => (
              <li key={s.label}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="uppercase-brand text-cream/80 hover:text-white"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="uppercase-brand text-xs text-white mb-4">{tr.footer.followOn}</h4>
          <ul className="space-y-3 text-xs">
            {(Object.entries(SITE.social) as [SocialNetwork, (typeof SITE.social)[SocialNetwork]][]).map(
              ([key, s]) => (
                <li key={s.url}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="uppercase-brand text-cream/80 hover:text-white inline-flex items-center gap-2"
                  >
                    <SocialIcon network={key} className="w-4 h-4" />
                    <span>{s.handle}</span>
                  </a>
                </li>
              ),
            )}
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--hairline)]">
        <div className="container-site py-8 flex flex-col sm:flex-row gap-6 sm:items-center sm:justify-between">
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {NAV_KEYS.map((item) => (
              <Link
                key={item.href}
                href={localizedHref(locale, item.href)}
                className="uppercase-brand text-[11px] text-cream/70 hover:text-white"
              >
                {tr.nav[item.key]}
              </Link>
            ))}
          </nav>
          <p className="uppercase-brand text-[11px] text-cream/50">
            © {new Date().getFullYear()} Sergjio Music
          </p>
        </div>
      </div>
    </footer>
  );
}
