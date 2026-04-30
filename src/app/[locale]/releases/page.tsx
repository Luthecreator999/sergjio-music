import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, t, localizedHref, type Locale } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import { asset } from "@/lib/asset";

const RELEASES = [
  {
    title: "Tar In The Jungle",
    feat: { de: "Feat. Sergjio Music", en: "Feat. Sergjio Music" },
    year: "2026",
    cover: "/images/instrument-azeri-tar.jpeg",
    url: SITE.streaming.soundcloud.url,
  },
  {
    title: "Microtonal Drum & Bass",
    feat: { de: "Feat. Sergjio Music", en: "Feat. Sergjio Music" },
    year: "2026",
    cover: "/images/sergjio-saz-portrait.jpg",
    url: SITE.streaming.youtube.url,
  },
];

export default async function ReleasesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const tr = t(locale);

  return (
    <>
      {/* Hero — portrait full-bleed mobile */}
      <section className="container-site pt-24 sm:pt-28">
        <div className="relative tile-quiet aspect-[4/5] sm:aspect-[16/9] lg:aspect-[16/6] flex items-end overflow-hidden">
          <Image
            src={asset("/images/sergjio-cornet-hero.jpg")}
            alt="Releases"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-transparent sm:bg-gradient-to-b sm:from-ink/40 sm:via-ink/30 sm:to-ink/85" />
          <div className="relative p-6 sm:p-10 lg:p-14 w-full">
            <p className="uppercase-brand text-xs text-cream/80 mb-3">{tr.releases.label}</p>
            <h1 className="uppercase-brand text-display-xl text-white drop-shadow-lg">{tr.releases.title}</h1>
          </div>
        </div>
      </section>

      <section className="container-site pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {RELEASES.map((r) => (
            <article key={r.title} className="tile flex flex-col">
              <div className="relative aspect-square">
                <Image
                  src={asset(r.cover)}
                  alt={r.title}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 sm:p-8 flex flex-col gap-4 flex-1">
                <div>
                  <h2 className="uppercase-brand text-xl sm:text-2xl text-white">{r.title}</h2>
                  <p className="uppercase-brand text-[11px] text-cream/60 mt-2">
                    {r.feat[locale]} · {r.year}
                  </p>
                </div>
                <a href={r.url} target="_blank" rel="noopener noreferrer" className="btn mt-auto self-start">
                  {tr.releases.listenNow}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-site py-16">
        <div className="tile p-8 sm:p-12 text-center">
          <h2 className="uppercase-brand text-display-md text-white">{tr.releases.streamOn}</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {Object.values(SITE.streaming).map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className="btn">
                {s.label}
              </a>
            ))}
          </div>
          <Link href={localizedHref(locale, "/booking")} className="btn-solid mt-8 inline-flex">
            {tr.nav.booking}
          </Link>
        </div>
      </section>
    </>
  );
}
