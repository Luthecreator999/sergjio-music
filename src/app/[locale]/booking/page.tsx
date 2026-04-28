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
      <section className="container-site pt-28 pb-10">
        <p className="uppercase-brand text-xs text-cream/60 mb-4">{tr.booking.label}</p>
        <h1 className="uppercase-brand text-display-xl text-white">{tr.booking.title}</h1>
        <p className="uppercase-brand text-display-md text-cream/80 mt-6 max-w-3xl">
          {tr.booking.sub}
        </p>
      </section>

      <section className="container-site pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5">
          <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-5">
            <div className="tile-quiet relative aspect-[3/4]">
              <Image
                src={asset("/images/booking-portrait.jpg")}
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

          <div className="lg:col-span-7 tile p-8 sm:p-12">
            <h2 className="uppercase-brand text-display-md text-white mb-8">{tr.booking.formTitle}</h2>
            <BookingForm locale={locale} />
          </div>
        </div>
      </section>
    </>
  );
}
