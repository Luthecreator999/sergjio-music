import { upcomingEvents, pastEvents } from "@/lib/events";
import EventCard from "@/components/EventCard";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import { PHOTOS } from "@/lib/photos";
import { isLocale, t, type Locale } from "@/lib/i18n";
import { pageMetadata, eventsSchema } from "@/lib/seo";
import { notFound } from "next/navigation";

// Regenerate hourly so a played show moves to the past shows soon after midnight.
export const revalidate = 3600;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return isLocale(locale) ? pageMetadata(locale, "tour") : {};
}

export default async function TourPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const tr = t(locale);
  const upcoming = upcomingEvents();
  const past = pastEvents();
  // Between tours there is nothing upcoming — show the played shows instead of "0+".
  const stats = tr.tour.stats.map((s) =>
    !s.v.includes("{count}")
      ? s
      : upcoming.length > 0
        ? { v: s.v.replace("{count}", String(upcoming.length)), l: s.l }
        : { v: String(past.length), l: tr.tour.pastTitle },
  );

  return (
    <>
      {upcoming.length > 0 && <JsonLd data={eventsSchema(upcoming, locale)} />}
      <PageHero
        image={PHOTOS.djSideWide.src}
        imageAlt={PHOTOS.djSideWide.alt[locale]}
        label={tr.tour.label}
        title={tr.tour.title}
        objectPosition={PHOTOS.djSideWide.position}
        size="wide"
      />

      {/* Stats bento */}
      <section className="container-site py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
          {stats.map((s) => (
            <div key={s.l} className="tile p-6 sm:p-8 text-center">
              <p className="uppercase-brand text-display-md text-white">{s.v}</p>
              <p className="uppercase-brand text-[11px] text-cream/60 mt-2">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-site py-12">
        <h2 className="uppercase-brand text-display-lg text-white mb-8">{tr.tour.upcomingTitle}</h2>
        {upcoming.length === 0 ? (
          <p className="uppercase-brand text-cream/60">{tr.common.noUpcoming}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {upcoming.map((e) => (
              <EventCard key={e.id} event={e} locale={locale} />
            ))}
          </div>
        )}
      </section>

      <section className="container-site py-12">
        <h2 className="uppercase-brand text-display-lg text-white mb-8">{tr.tour.pastTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {past.map((e) => (
            <EventCard key={e.id} event={e} locale={locale} past />
          ))}
        </div>
      </section>
    </>
  );
}
