import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BookingForm from "@/components/BookingForm";
import PageHero from "@/components/PageHero";
import { EPK, EPK_KINDS } from "@/lib/epk";
import { PHOTOS } from "@/lib/photos";
import { SITE } from "@/lib/site";
import { isLocale, t, localizedHref, type Locale } from "@/lib/i18n";
import { pageMetadata, PAGE_PATHS } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return isLocale(locale) ? pageMetadata(locale, "booking") : {};
}

export default async function BookingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const tr = t(locale);

  return (
    <>
      <PageHero
        image={PHOTOS.sazStage.src}
        imageAlt={PHOTOS.sazStage.alt[locale]}
        label={tr.booking.label}
        title={tr.booking.title}
        subtitle={tr.booking.sub}
        objectPosition="center 35%"
        size="wide"
      />

      <section className="container-site py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
          <div className="flex flex-col gap-4 sm:gap-5">
            <div className="tile-quiet relative aspect-[3/4]">
              <Image
                src={PHOTOS.djLaughing.src}
                alt={PHOTOS.djLaughing.alt[locale]}
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover object-[center_30%]"
              />
            </div>

            <div className="tile p-6 sm:p-8">
              <p className="uppercase-brand text-xs text-cream/60 mb-3">{tr.booking.direct}</p>
              <a
                href={`mailto:${SITE.email}`}
                className="uppercase-brand text-base sm:text-lg text-white hover:underline block"
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

              <div className="mt-6 flex flex-wrap gap-3">
                {EPK_KINDS.map((kind) => (
                  <Link
                    key={kind}
                    href={localizedHref(locale, PAGE_PATHS[EPK[kind].page])}
                    className="btn"
                  >
                    {tr.epk.profiles[kind].title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="tile p-8 sm:p-12">
            <h2 className="uppercase-brand text-display-md text-white mb-8">{tr.booking.formTitle}</h2>
            <BookingForm locale={locale} />
          </div>
        </div>
      </section>
    </>
  );
}
