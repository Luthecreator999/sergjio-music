import { asset } from "@/lib/asset";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, t, localizedHref, type Locale } from "@/lib/i18n";
import { SITE } from "@/lib/site";
import SiteVideo from "@/components/SiteVideo";
import { VIDEOS } from "@/lib/media";

const GALLERY = [
  "/images/dj-live-1.jpg",
  "/images/dj-live-2.jpg",
  "/images/dj-live-3.jpg",
  "/images/dj-live-4.jpg",
  "/images/dj-live-5.jpg",
  "/images/dj-live-6.jpg",
];

export default async function DJPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const tr = t(locale);

  return (
    <>
      {/* Hero tile */}
      <section className="container-site pt-24 sm:pt-28">
        <div className="relative tile-quiet aspect-[16/12] sm:aspect-[16/9] lg:aspect-[16/8] flex items-end overflow-hidden">
          <Image
            src={asset("/images/dj-booth-hero.jpg")}
            alt="DJ Sergjio"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/30 to-ink/85" />
          <div className="relative p-6 sm:p-10 lg:p-14 w-full">
            <p className="uppercase-brand text-xs text-cream/80 mb-3">{tr.dj.label}</p>
            <h1 className="uppercase-brand text-display-xl text-white">{tr.dj.title}</h1>
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

      {/* Soundcloud bento */}
      <section className="container-site pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5">
          <div className="lg:col-span-2 tile-quiet overflow-hidden">
            <iframe
              width="100%"
              height="500"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/sergjio&color=%23cccccc&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              className="block"
            />
          </div>
          <div className="tile p-8 flex flex-col justify-between gap-6">
            <div>
              <p className="uppercase-brand text-xs text-cream/60 mb-3">Soundcloud</p>
              <h3 className="uppercase-brand text-2xl text-white">
                {locale === "de" ? "Latest Mixes & Tracks" : "Latest mixes & tracks"}
              </h3>
              <p className="text-sm text-cream/70 normal-case font-normal leading-relaxed mt-4">
                {locale === "de"
                  ? "Alle aktuellen Sets, Mixes und Drops direkt von Sergjio's Soundcloud."
                  : "All recent sets, mixes and drops straight from Sergjio's Soundcloud."}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={SITE.streaming.soundcloud.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-solid"
              >
                {locale === "de" ? "Soundcloud öffnen" : "Open Soundcloud"}
              </a>
              <a
                href={SITE.social.youtube.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features tiles */}
      <section className="container-site py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {tr.dj.features.map((f) => (
            <div key={f.h} className="tile p-8">
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

      {/* Gallery — true bento grid */}
      <section className="container-site py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-dense gap-3 sm:gap-4">
          {GALLERY.map((src, i) => {
            const layout =
              i === 0
                ? "col-span-2 row-span-2 aspect-square"
                : i === 3
                  ? "col-span-2 aspect-[2/1]"
                  : "aspect-square";
            return (
              <div key={src} className={`tile relative overflow-hidden ${layout}`}>
                <Image
                  src={asset(src)}
                  alt="DJ Sergjio live"
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            );
          })}
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
