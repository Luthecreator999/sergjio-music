import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SiteVideo from "@/components/SiteVideo";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import { EPK, EPK_KINDS } from "@/lib/epk";
import { localized, pastEventsOf, type EventKind } from "@/lib/events";
import { t, localizedHref, type Locale } from "@/lib/i18n";
import { PAGE_PATHS } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { whatsappEpk } from "@/lib/whatsapp";

/**
 * One press kit. The Live-EPK and the DJ-EPK routes both render this component;
 * `kind` decides which bio, media and references are shown.
 */
export default function EpkPage({ locale, kind }: { locale: Locale; kind: EventKind }) {
  const tr = t(locale);
  const profile = EPK[kind];
  const copy = tr.epk.profiles[kind];
  const references = pastEventsOf(kind).map((e) => localized(e, locale));
  const riderMail = `mailto:${SITE.email}?subject=${encodeURIComponent(`${tr.epk.riderTitle} — ${copy.title}`)}`;

  const facts = [
    { label: tr.common.available_for, value: tr.common.festivalsClubsPrivate },
    { label: tr.common.based_in, value: tr.common.switzerland },
    { label: tr.common.travels, value: tr.common.international },
  ];

  return (
    <>
      <PageHero
        image={profile.hero.photo.src}
        imageAlt={profile.hero.photo.alt[locale]}
        label={tr.epk.label}
        title={copy.title}
        subtitle={copy.sub}
        objectPosition={profile.hero.position}
        size="tall"
      />

      {/* Switch between the two kits */}
      <nav aria-label={tr.epk.label} className="container-site pt-6 flex flex-wrap gap-3">
        {EPK_KINDS.map((k) => (
          <Link
            key={k}
            href={localizedHref(locale, PAGE_PATHS[EPK[k].page])}
            aria-current={k === kind ? "page" : undefined}
            className={k === kind ? "btn-solid" : "btn"}
          >
            {tr.epk.profiles[k].title}
          </Link>
        ))}
      </nav>

      {/* Bio — equal split */}
      <section className="container-site py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
          <div className="tile-quiet relative aspect-[4/5] lg:aspect-auto">
            <Image
              src={profile.portrait.photo.src}
              alt={profile.portrait.photo.alt[locale]}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              style={{ objectPosition: profile.portrait.position }}
            />
          </div>
          <div className="tile p-8 sm:p-12">
            <p className="uppercase-brand text-xs text-cream/60 mb-3">{tr.epk.bioTitle}</p>
            <h2 className="uppercase-brand text-display-md text-white mb-6">{tr.epk.tagline}</h2>
            <div className="space-y-5 text-base sm:text-lg text-cream/85 normal-case font-normal leading-relaxed">
              {copy.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fact tiles */}
      <section className="container-site py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
          {facts.map((f) => (
            <div key={f.label} className="tile p-6 sm:p-8">
              <p className="uppercase-brand text-xs text-cream/60">{f.label}</p>
              <p className="uppercase-brand text-base text-white mt-3">{f.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Videos — YouTube uploads as click-to-play tiles, own files at native aspect */}
      {(profile.youtube.length > 0 || profile.videos.length > 0) && (
        <section className="container-site py-16">
          <h2 className="uppercase-brand text-display-lg text-white mb-8">{tr.epk.videosTitle}</h2>
          <div className="space-y-4 sm:space-y-5">
            {profile.youtube.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
                {profile.youtube.map((v) => (
                  <YouTubeEmbed key={v.id} video={v} />
                ))}
              </div>
            )}
            {profile.videos.length > 0 && (
              <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
                {profile.videos.map((v) => (
                  <SiteVideo key={v.src} {...v} className="w-full" />
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Press photos — uniform grid, each titled and with a direct download */}
      {profile.photos.length > 0 && (
        <section className="container-site py-16">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8">
            <h2 className="uppercase-brand text-display-lg text-white">{tr.epk.photosTitle}</h2>
            <p className="uppercase-brand text-[11px] text-cream/60">{tr.epk.photosNote}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-6 sm:gap-x-5 sm:gap-y-8">
            {profile.photos.map((photo, i) => {
              // With an odd count the last photo would sit alone in the two-column
              // phone grid — let it span the full width there instead.
              const wide = i === profile.photos.length - 1 && profile.photos.length % 2 === 1;
              const file = photo.press ?? photo.src;
              return (
                <figure key={photo.src} className={wide ? "col-span-2 md:col-span-1" : undefined}>
                  <div
                    className={`tile relative group ${wide ? "aspect-[2/1] md:aspect-square" : "aspect-square"}`}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt[locale]}
                      fill
                      loading="lazy"
                      sizes={wide ? "(min-width: 768px) 33vw, 100vw" : "(min-width: 768px) 33vw, 50vw"}
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      style={{ objectPosition: photo.position ?? "center 25%" }}
                    />
                    <a
                      href={file}
                      download
                      aria-label={`${tr.epk.download}: ${photo.title[locale]}`}
                      className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 inline-flex items-center gap-2 p-2.5 sm:px-4 sm:py-2.5 uppercase-brand text-[11px] text-white rounded-full bg-ink/70 backdrop-blur-sm border border-[var(--hairline-strong)] hover:bg-cream hover:text-ink transition-colors duration-200"
                    >
                      <span className="hidden sm:inline">{tr.epk.download}</span>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path
                          d="M7 1v8m0 0L3.5 5.5M7 9l3.5-3.5M1.5 12.5h11"
                          stroke="currentColor"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                  <figcaption className="uppercase-brand text-[11px] text-cream/70 mt-3 px-1">
                    {photo.title[locale]}
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </section>
      )}

      {/* References — played shows of this profile, newest first */}
      {references.length > 0 && (
        <section className="container-site py-16">
          <h2 className="uppercase-brand text-display-lg text-white mb-8">{tr.epk.referencesTitle}</h2>
          <ul className="tile">
            {references.map((e) => (
              <li
                key={e.id}
                className="px-6 sm:px-8 py-5 grid grid-cols-1 sm:grid-cols-[11rem_1fr] lg:grid-cols-[11rem_1fr_auto] gap-x-6 gap-y-1 sm:items-baseline border-t border-[var(--hairline)] first:border-t-0"
              >
                <p className="uppercase-brand text-xs text-cream/60">{e.displayDate}</p>
                <div>
                  <p className="uppercase-brand text-base sm:text-lg text-white leading-[1.1]">{e.title}</p>
                  <p className="uppercase-brand text-xs text-cream/70 mt-1">
                    {e.city}, {e.country} — {e.venue}
                  </p>
                </div>
                <p className="uppercase-brand text-[11px] text-cream/60 sm:col-start-2 lg:col-start-auto lg:text-right">
                  {e.format}
                </p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Technical rider + booking contact */}
      <section className="container-site py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
          <div className="tile p-8 sm:p-12 flex flex-col items-start">
            <h2 className="uppercase-brand text-display-md text-white">{tr.epk.riderTitle}</h2>
            <p className="text-base sm:text-lg text-cream/85 normal-case font-normal leading-relaxed mt-4">
              {tr.epk.riderText}
            </p>
            <a href={riderMail} className="btn mt-8">
              {tr.epk.riderButton}
            </a>
          </div>

          <div className="tile p-8 sm:p-12">
            <h2 className="uppercase-brand text-display-md text-white mb-4">{tr.epk.contactTitle}</h2>
            <a
              href={`mailto:${SITE.email}`}
              className="uppercase-brand text-base sm:text-lg text-white hover:underline block break-all"
            >
              {SITE.email}
            </a>
            <a
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              className="uppercase-brand text-base sm:text-lg text-white hover:underline block mt-2"
            >
              {SITE.phone}
            </a>
            <p className="uppercase-brand text-[11px] text-cream/60 mt-4">
              {tr.common.switzerland} · {tr.common.available}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsappEpk(locale, copy.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-solid"
              >
                {tr.epk.whatsapp}
              </a>
              <Link href={localizedHref(locale, PAGE_PATHS.booking)} className="btn">
                {kind === "dj" ? tr.common.bookDj : tr.common.bookSergjio}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
