import { asset } from "@/lib/asset";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, t, localizedHref, type Locale } from "@/lib/i18n";

const INSTRUMENTS = [
  { key: "Azeri Tar", image: "/images/instrument-azeri-tar.jpeg" },
  { key: "Azeri Aşıq Saz", image: "/images/instrument-asik-saz.jpeg" },
  { key: "Uzun Saz Bağlama", image: "/images/instrument-baglama.jpeg" },
  { key: "Electro Saz", image: "/images/instrument-electro-saz.jpeg" },
  { key: "Soprano Cornet", image: "/images/sergjio-cornet-hero.jpg" },
];

const INSTRUMENT_DESCRIPTIONS: Record<string, { de: string; en: string }> = {
  "Azeri Tar": {
    de: "Eine meisterhaft gefertigte mikrotonale Laute aus der aserbaidschanischen Klassik. Ihr Klang trägt Jahrhunderte Tradition.",
    en: "A masterfully crafted microtonal lute central to Azerbaijani classical music. Its sound carries centuries of tradition.",
  },
  "Azeri Aşıq Saz": {
    de: "Ein traditionelles Langhalsinstrument, verwurzelt in der Erzählkultur. Warm, narrativ, zutiefst menschlich.",
    en: "A traditional long-necked instrument rooted in folk storytelling culture. Warm, narrative, deeply human.",
  },
  "Uzun Saz Bağlama": {
    de: "Die akustische Langhals-Bağlama bringt Wärme und Resonanz — eine meditative Stimme über Genres hinweg.",
    en: "The acoustic long-necked Bağlama brings warmth and resonance — a meditative voice across genres.",
  },
  "Electro Saz": {
    de: "Eine verstärkte Bühnen-Version der traditionellen Saz, gebaut um durch Club-Anlagen zu schneiden.",
    en: "An amplified stage version of the traditional Saz, built to cut through club systems and live electronic sets.",
  },
  "Soprano Cornet": {
    de: "Eine helle, lyrische Blechstimme — Sergjios Werkzeug für melodischen Kontrapunkt über schwere elektronische Texturen.",
    en: "A bright, lyrical brass voice — Sergjio's tool for melodic counterpoint over heavy electronic textures.",
  },
};

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const tr = t(locale);

  return (
    <>
      {/* Hero — portrait full-bleed mobile */}
      <section className="container-site pt-24 sm:pt-28">
        <div className="relative tile-quiet aspect-[3/4] sm:aspect-[16/10] lg:aspect-[16/7] min-h-[80svh] sm:min-h-0 flex items-end overflow-hidden">
          <Image
            src={asset("/images/about-portrait.jpg")}
            alt="Sergjio"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_15%] sm:object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent sm:bg-gradient-to-b sm:from-ink/40 sm:via-ink/30 sm:to-ink/90" />
          <div className="relative p-6 sm:p-10 lg:p-14 w-full">
            <p className="uppercase-brand text-xs text-cream/80 mb-3">{tr.about.label}</p>
            <h1 className="uppercase-brand text-display-xl text-white drop-shadow-lg">{tr.about.title}</h1>
          </div>
        </div>
      </section>

      {/* Story bento — text-focused (portrait moved to hero) */}
      <section className="container-site py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5">
          <div className="lg:col-span-5 tile-quiet relative aspect-[3/4]">
            <Image
              src={asset("/images/sergjio-saz-portrait.jpg")}
              alt="Sergjio with instrument"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="lg:col-span-7 tile p-8 sm:p-12">
            <h2 className="uppercase-brand text-display-md text-white mb-6">{tr.about.storyTitle}</h2>
            <div className="space-y-5 text-base sm:text-lg text-cream/85 normal-case font-normal leading-relaxed">
              <p>{tr.about.p1}</p>
              <p>{tr.about.p2}</p>
              <p>{tr.about.p3}</p>
              <p className="text-cream/60">{tr.about.spaces}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features bento (3 tiles) */}
      <section className="container-site py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {tr.about.features.map((c) => (
            <div key={c.h} className="tile p-8">
              <h3 className="uppercase-brand text-base text-white">{c.h}</h3>
              <p className="text-sm text-cream/70 normal-case font-normal leading-relaxed mt-3">{c.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Instruments — Bento mosaic */}
      <section className="container-site py-16">
        <h2 className="uppercase-brand text-display-lg text-white mb-10">{tr.about.instrumentsTitle}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-dense gap-4 sm:gap-5">
          {INSTRUMENTS.map((i, idx) => {
            const isFeatured = idx === 0; // Tar = hero
            return (
              <article
                key={i.key}
                className={`tile flex flex-col ${
                  isFeatured ? "col-span-2 md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <div className={`relative ${isFeatured ? "aspect-[4/5]" : "aspect-square"}`}>
                  <Image
                    src={asset(i.image)}
                    alt={i.key}
                    fill
                    sizes={
                      isFeatured
                        ? "(min-width: 768px) 50vw, 100vw"
                        : "(min-width: 768px) 25vw, 50vw"
                    }
                    className="object-cover"
                  />
                </div>
                <div className={`p-5 sm:p-6 ${isFeatured ? "lg:p-8" : ""} flex-1`}>
                  <h3 className={`uppercase-brand text-white ${isFeatured ? "text-2xl" : "text-base"}`}>
                    {i.key}
                  </h3>
                  <p
                    className={`text-cream/70 normal-case font-normal leading-relaxed mt-2 ${
                      isFeatured ? "text-base" : "text-xs"
                    }`}
                  >
                    {INSTRUMENT_DESCRIPTIONS[i.key][locale]}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Quote tile */}
      <section className="container-site py-16 sm:py-20">
        <div className="tile p-10 sm:p-16">
          <p className="uppercase-brand text-display-md text-white leading-[1.1]">
            &ldquo;{tr.about.quote}&rdquo;
          </p>
          <p className="uppercase-brand text-xs text-cream/60 mt-6">— Sergjio</p>
        </div>
      </section>

      {/* Stat tiles */}
      <section className="container-site py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
          <div className="tile p-8">
            <p className="uppercase-brand text-xs text-cream/60">{tr.common.available_for}</p>
            <p className="uppercase-brand text-base text-white mt-3">{tr.common.festivalsClubsPrivate}</p>
          </div>
          <div className="tile p-8">
            <p className="uppercase-brand text-xs text-cream/60">{tr.common.based_in}</p>
            <p className="uppercase-brand text-base text-white mt-3">{tr.common.switzerland}</p>
          </div>
          <div className="tile p-8">
            <p className="uppercase-brand text-xs text-cream/60">{tr.common.travels}</p>
            <p className="uppercase-brand text-base text-white mt-3">{tr.common.international}</p>
          </div>
        </div>
      </section>

      <section className="container-site py-12 text-center">
        <Link href={localizedHref(locale, "/booking")} className="btn-solid">
          {tr.common.bookSergjio}
        </Link>
      </section>
    </>
  );
}
