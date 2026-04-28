import Image from "next/image";
import { upcomingEvents, pastEvents } from "@/lib/events";
import EventCard from "@/components/EventCard";
import { isLocale, t, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default async function TourPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const tr = t(locale);
  const upcoming = upcomingEvents();
  const past = pastEvents();

  return (
    <>
      {/* Hero tile */}
      <section className="container-site pt-24 sm:pt-28">
        <div className="relative tile-quiet aspect-[16/12] sm:aspect-[16/8] lg:aspect-[16/6] flex items-end overflow-hidden">
          <Image
            src="/images/tour-hero.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/30 to-ink/85" />
          <div className="relative p-6 sm:p-10 lg:p-14 w-full">
            <p className="uppercase-brand text-xs text-cream/80 mb-3">{tr.tour.label}</p>
            <h1 className="uppercase-brand text-display-xl text-white">{tr.tour.title}</h1>
          </div>
        </div>
      </section>

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
