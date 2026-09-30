import { upcomingEvents, pastEvents } from "@/lib/events";
import EventCard from "@/components/EventCard";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import { isLocale, t, type Locale } from "@/lib/i18n";
import { pageMetadata, eventsSchema } from "@/lib/seo";
import { notFound } from "next/navigation";

// Regenerate daily so the upcoming/past split advances without a redeploy.
export const revalidate = 86400;

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

  return (
    <>
      <JsonLd data={eventsSchema(upcoming, locale)} />
      <PageHero
        image="/images/tour-hero.jpg"
        imageAlt="Sergjio performing live on stage"
        label={tr.tour.label}
        title={tr.tour.title}
        objectPosition="70% 35%"
        size="wide"
      />

      {/* Stats bento */}
      <section className="container-site py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
          {tr.tour.stats.map((s) => (
            <div key={s.l} className="tile p-6 sm:p-8 text-center">
              <p className="uppercase-brand text-display-md text-white">
                {s.v.replace("{count}", String(upcoming.length))}
              </p>
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
