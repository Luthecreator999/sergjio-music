import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/site";
import { upcomingEvents } from "@/lib/events";
import EventCard from "@/components/EventCard";
import { isLocale, t, localizedHref, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const tr = t(locale);
  const events = upcomingEvents().slice(0, 3);

  return (
    <>
      {/* HERO — full bleed bento overlay */}
      <section className="container-site pt-24 sm:pt-28">
        <div className="relative tile-quiet aspect-[16/12] sm:aspect-[16/9] lg:aspect-[16/7] flex items-end overflow-hidden">
          <Image
            src="/images/sergjio-cornet-hero.jpg"
            alt="Sergjio"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/30 to-ink/90" />

          <div className="relative p-6 sm:p-10 lg:p-14 w-full">
            <p className="uppercase-brand text-xs sm:text-sm text-cream/80 mb-3">{tr.home.location}</p>
            <h1 className="uppercase-brand text-display-xl text-white">{tr.home.title}</h1>
            <p className="uppercase-brand text-display-md text-cream/90 mt-4 max-w-3xl">{tr.home.tagline}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={SITE.streaming.appleMusic.url} target="_blank" rel="noopener noreferrer" className="btn-solid">
                Apple Music
              </a>
              <a href={SITE.streaming.soundcloud.url} target="_blank" rel="noopener noreferrer" className="btn">
                Soundcloud
              </a>
              <a href={SITE.streaming.youtubeMusic.url} target="_blank" rel="noopener noreferrer" className="btn">
                YouTube Music
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TOUR — bento: 1 featured + 2 stacked */}
      <section id="sergjioontour" className="container-site py-16 sm:py-24">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <div>
            <p className="uppercase-brand text-xs text-cream/60 mb-3">{tr.home.tourLabel}</p>
            <h2 className="uppercase-brand text-display-lg text-white">{tr.home.upcomingShows}</h2>
          </div>
          <Link href={localizedHref(locale, "/tour")} className="btn self-start sm:self-end">
            {tr.common.seeAll}
          </Link>
        </div>

        {events.length === 0 ? (
          <p className="uppercase-brand text-cream/60">{tr.common.noUpcoming}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {events.map((e, i) => (
              <div key={e.id} className={i === 0 ? "md:col-span-2 md:row-span-2" : ""}>
                <EventCard event={e} locale={locale} />
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ABOUT — bento split */}
      <section className="container-site py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5">
          <div className="lg:col-span-5 tile-quiet relative aspect-[4/5] lg:aspect-auto">
            <Image
              src="/images/sergjio-saz-portrait.jpg"
              alt="Sergjio with instrument"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="lg:col-span-7 tile p-8 sm:p-12 flex flex-col justify-center">
            <h2 className="uppercase-brand text-display-lg text-white">{tr.home.aboutTitle}</h2>
            <p className="text-base sm:text-lg text-cream/85 normal-case font-normal leading-relaxed mt-6">
              {tr.home.aboutP1}
            </p>
            <p className="text-base text-cream/65 normal-case font-normal leading-relaxed mt-4">
              {tr.home.aboutP2}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={localizedHref(locale, "/about")} className="btn">
                {tr.common.aboutSergjio}
              </Link>
              <Link href={localizedHref(locale, "/dj")} className="btn">
                {tr.common.djSergjio}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* YOUTUBE — bento mosaic */}
      <section className="container-site py-16 sm:py-24">
        <h2 className="uppercase-brand text-display-lg text-white mb-10">{tr.home.youtubeTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 sm:gap-5 md:h-[560px]">
          <a
            href={SITE.social.youtube.url}
            target="_blank"
            rel="noopener noreferrer"
            className="tile relative md:col-span-2 md:row-span-2 group"
          >
            <Image
              src="/images/release-cover-tar-jungle.png"
              alt="YouTube video"
              fill
              sizes="(min-width: 768px) 66vw, 100vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <span className="absolute inset-0 flex items-end justify-start p-8 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent">
              <span className="uppercase-brand text-base text-white border border-white/60 px-5 py-3 rounded-full backdrop-blur-sm">
                {tr.common.watch}
              </span>
            </span>
          </a>
          <a
            href={SITE.social.youtube.url}
            target="_blank"
            rel="noopener noreferrer"
            className="tile relative group"
          >
            <Image
              src="/images/youtube-thumb-1.png"
              alt="YouTube video"
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <span className="absolute inset-0 flex items-end justify-start p-5 bg-gradient-to-t from-ink/70 via-transparent to-transparent">
              <span className="uppercase-brand text-xs text-white border border-white/60 px-4 py-2 rounded-full">
                {tr.common.watch}
              </span>
            </span>
          </a>
          <a
            href={SITE.social.youtube.url}
            target="_blank"
            rel="noopener noreferrer"
            className="tile relative group"
          >
            <Image
              src="/images/youtube-thumb-2.png"
              alt="YouTube video"
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <span className="absolute inset-0 flex items-end justify-start p-5 bg-gradient-to-t from-ink/70 via-transparent to-transparent">
              <span className="uppercase-brand text-xs text-white border border-white/60 px-4 py-2 rounded-full">
                {tr.common.watch}
              </span>
            </span>
          </a>
        </div>
      </section>

      {/* SOCIAL TILES */}
      <section className="container-site py-16 sm:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
          {Object.values(SITE.social).map((s) => (
            <a
              key={s.url}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="tile p-8 flex flex-col justify-between min-h-[200px]"
            >
              <p className="uppercase-brand text-[11px] text-cream/60">{tr.common.follow}</p>
              <div>
                <p className="uppercase-brand text-2xl text-white">{s.handle}</p>
                <p className="uppercase-brand text-[11px] text-cream/60 mt-2">↗</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-site py-16 sm:py-24">
        <div className="relative tile-quiet aspect-[16/9] sm:aspect-[16/7] flex items-center justify-center text-center overflow-hidden">
          <Image
            src="/images/cta-background.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-ink/60" />
          <div className="relative p-8 sm:p-16">
            <h2 className="uppercase-brand text-display-xl text-white">{tr.home.ctaTitle}</h2>
            <p className="text-base sm:text-lg text-cream/85 normal-case font-normal leading-relaxed mt-6 max-w-2xl mx-auto">
              {tr.home.ctaSub}
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Link href={localizedHref(locale, "/booking")} className="btn-solid">{tr.home.ctaBtn}</Link>
              <Link href={localizedHref(locale, "/tour")} className="btn">{tr.common.seeAllShows}</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
