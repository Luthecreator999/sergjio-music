import { asset } from "@/lib/asset";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, t, localizedHref, type Locale } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import SiteVideo from "@/components/SiteVideo";
import { VIDEOS } from "@/lib/media";

const GALLERY = [
  "/images/dj-live-2.jpg",
  "/images/dj-live-3.jpg",
  "/images/archive-dj-2.jpeg",
  "/images/dj-live-6.jpg",
  "/images/archive-dj-1.jpeg",
  "/images/dj-booth-hero.jpg",
];

export default async function DJPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const tr = t(locale);

  return (
    <>
      {/* Hero — portrait full-bleed mobile */}
      <section className="container-site pt-24 sm:pt-28">
        <div className="relative tile-quiet aspect-[4/5] sm:aspect-[16/10] lg:aspect-[16/7] flex items-end overflow-hidden">
          <Image
            src={asset("/images/dj-live-5.jpg")}
            alt="DJ Sergjio"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent sm:bg-gradient-to-b sm:from-ink/40 sm:via-ink/30 sm:to-ink/85" />
          <div className="relative p-6 sm:p-10 lg:p-14 w-full">
            <p className="uppercase-brand text-xs text-cream/80 mb-3">{tr.dj.label}</p>
            <h1 className="uppercase-brand text-display-xl text-white drop-shadow-lg">{tr.dj.title}</h1>
            <p className="uppercase-brand text-display-md text-cream/90 mt-3">{tr.dj.sub}</p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="container-site py-16">
        <div className="tile p-8 sm:p-12">
          <p className="text-base sm:text-lg text-cream/85 normal-case font-normal leading-relaxed max-w-3xl">
            {tr.dj.intro}
          </p>
        </div>
      </section>

      {/* Soundcloud — live profile feed (always up-to-date with his latest uploads) */}
      <section className="container-site pb-16">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
          <div>
            <p className="uppercase-brand text-xs text-cream/60 mb-2">Soundcloud · Live Feed</p>
            <h2 className="uppercase-brand text-display-md text-white">
              {locale === "de" ? "Aktuelle Sets, Mixes & Releases" : "Latest Sets, Mixes & Releases"}
            </h2>
          </div>
          <a
            href={SITE.streaming.soundcloud.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-solid self-start sm:self-end"
          >
            {locale === "de" ? "Auf Soundcloud öffnen ↗" : "Open on Soundcloud ↗"}
          </a>
        </div>
        <div className="tile-quiet overflow-hidden">
          <iframe
            width="100%"
            height="650"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src={`https://w.soundcloud.com/player/?url=https%3A%2F%2Fsoundcloud.com%2F${SITE.streaming.soundcloud.handle}&color=%23cccccc&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}
            className="block w-full"
          />
        </div>
      </section>

      {/* Features tiles */}
      <section className="container-site py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {tr.dj.features.map((f) => (
            <div key={f.h} className="tile p-6 sm:p-8">
              <h3 className="uppercase-brand text-base text-white">{f.h}</h3>
              <p className="text-sm text-cream/70 normal-case font-normal leading-relaxed mt-3">{f.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Live video tile — native aspect ratio (no cropping) */}
      <section className="container-site py-16">
        <h2 className="uppercase-brand text-display-lg text-white mb-8">{tr.dj.galleryTitle}</h2>
        <SiteVideo {...VIDEOS.djPortfolio} />
      </section>

      {/* Gallery — uniform grid, all squares */}
      <section className="container-site py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-5">
          {GALLERY.map((src) => (
            <div key={src} className="tile relative aspect-square overflow-hidden">
              <Image
                src={asset(src)}
                alt="DJ Sergjio live"
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 33vw, 50vw"
                className="object-cover object-[center_25%] hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="container-site py-16 text-center">
        <Link href={localizedHref(locale, "/booking")} className="btn-solid">
          {tr.common.bookDj}
        </Link>
      </section>
    </>
  );
}
