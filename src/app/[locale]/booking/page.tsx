import { asset } from "@/lib/asset";
import Image from "next/image";
import { notFound } from "next/navigation";
import BookingForm from "@/components/BookingForm";
import { SITE } from "@/lib/site";
import { isLocale, t, type Locale } from "@/lib/i18n";

export default async function BookingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const tr = t(locale);

  return (
    <>
      {/* Hero — portrait full-bleed mobile */}
      <section className="container-site pt-24 sm:pt-28">
        <div className="relative tile-quiet aspect-[3/4] sm:aspect-[16/9] lg:aspect-[16/6] min-h-[75svh] sm:min-h-0 flex items-end overflow-hidden">
          <Image
            src={asset("/images/booking-portrait.jpg")}
            alt="Sergjio Booking"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-transparent sm:bg-gradient-to-b sm:from-ink/40 sm:via-ink/30 sm:to-ink/85" />
          <div className="relative p-6 sm:p-10 lg:p-14 w-full">
            <p className="uppercase-brand text-xs text-cream/80 mb-3">{tr.booking.label}</p>
            <h1 className="uppercase-brand text-display-xl text-white drop-shadow-lg">{tr.booking.title}</h1>
            <p className="uppercase-brand text-display-md text-cream/90 mt-3 max-w-3xl">{tr.booking.sub}</p>
          </div>
        </div>
      </section>

      <section className="container-site py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
          <div className="flex flex-col gap-4 sm:gap-5">
            <div className="tile-quiet relative aspect-[3/4]">
              <Image
                src={asset("/images/sergjio-saz-portrait.jpg")}
                alt="Sergjio booking"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
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

              <a
                href={asset("/press/sergjio-presskit.pdf")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn mt-6"
              >
                Press Kit (PDF)
              </a>
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
