import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { EPK, EPK_KINDS } from "@/lib/epk";
import { isLocale, t, localizedHref, type Locale } from "@/lib/i18n";
import { pageMetadata, PAGE_PATHS } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return isLocale(locale) ? pageMetadata(locale, "epk") : {};
}

export default async function EpkIndexPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const tr = t(locale);

  return (
    <>
      <PageHero
        image="/images/youtube-thumb-1.jpg"
        imageAlt="Sergjio with saz, soprano cornet and at the decks"
        label={tr.epk.label}
        title={tr.epk.title}
        subtitle={tr.epk.tagline}
        objectPosition="center 25%"
        size="tall"
      />

      {/* Intro */}
      <section className="container-site py-16">
        <div className="tile p-8 sm:p-12">
          <p className="text-base sm:text-lg text-cream/85 normal-case font-normal leading-relaxed max-w-3xl">
            {tr.epk.intro}
          </p>
        </div>
      </section>

      {/* The two kits */}
      <section className="container-site pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {EPK_KINDS.map((kind) => {
            const profile = EPK[kind];
            const copy = tr.epk.profiles[kind];
            return (
              <Link
                key={kind}
                href={localizedHref(locale, PAGE_PATHS[profile.page])}
                className="tile group flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={profile.hero.image}
                    alt={profile.hero.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ objectPosition: profile.hero.position }}
                  />
                </div>
                <div className="p-6 sm:p-8 flex-1">
                  <h2 className="uppercase-brand text-display-md text-white">{copy.title}</h2>
                  <p className="text-sm sm:text-base text-cream/70 normal-case font-normal leading-relaxed mt-3">
                    {copy.teaser}
                  </p>
                  <p className="uppercase-brand text-xs text-cream/60 mt-6">{tr.epk.open} ↗</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="container-site py-12 text-center">
        <Link href={localizedHref(locale, PAGE_PATHS.booking)} className="btn-solid">
          {tr.common.bookSergjio}
        </Link>
      </section>
    </>
  );
}
