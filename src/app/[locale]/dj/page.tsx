import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, t, localizedHref, type Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import PageHero from "@/components/PageHero";
import SiteVideo from "@/components/SiteVideo";
import SoundcloudEmbed from "@/components/SoundcloudEmbed";
import { VIDEOS } from "@/lib/media";
import { PHOTOS, type Photo } from "@/lib/photos";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return isLocale(locale) ? pageMetadata(locale, "dj") : {};
}

// Twelve photos fill both the two-column phone grid and the three-column desktop grid.
const GALLERY: Photo[] = [
  PHOTOS.vinylRecord,
  PHOTOS.vinylTurntable,
  PHOTOS.vinylMixer,
  PHOTOS.cornetTurntable,
  PHOTOS.cornetDjSet,
  PHOTOS.sazDjSet,
  PHOTOS.djSide,
  PHOTOS.djMixerDetail,
  PHOTOS.djProfile,
  PHOTOS.djMixing,
  PHOTOS.djLaughing,
  PHOTOS.djJogWheel,
];

export default async function DJPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const tr = t(locale);

  return (
    <>
      <PageHero
        image="/images/dj-live-5.jpg"
        imageAlt="DJ Sergjio performing a live set"
        label={tr.dj.label}
        title={tr.dj.title}
        subtitle={tr.dj.sub}
        objectPosition="center 30%"
        size="tall"
      />

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
            <p className="uppercase-brand text-xs text-cream/60 mb-2">{tr.dj.liveFeed}</p>
            <h2 className="uppercase-brand text-display-md text-white">{tr.dj.latestTitle}</h2>
          </div>
          <a
            href={SITE.streaming.soundcloud.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-solid self-start sm:self-end"
          >
            {tr.dj.openSoundcloud}
          </a>
        </div>
        <SoundcloudEmbed
          handle={SITE.streaming.soundcloud.handle}
          posterSrc={"/images/dj-live-4.jpg"}
          posterAlt="Sergjio DJ set poster"
          ctaLabel={tr.dj.playSoundcloud}
        />
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
          {GALLERY.map((photo) => (
            <div key={photo.src} className="tile relative aspect-square overflow-hidden">
              <Image
                src={photo.src}
                alt={photo.alt[locale]}
                fill
                loading="lazy"
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
                style={{ objectPosition: photo.position ?? "center 25%" }}
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
