import { localized, type Event } from "@/lib/events";
import { whatsappLink } from "@/lib/whatsapp";
import { t, type Locale } from "@/lib/i18n";

export default function EventCard({
  event,
  locale,
  past = false,
}: {
  event: Event;
  locale: Locale;
  past?: boolean;
}) {
  const e = localized(event, locale);
  const tr = t(locale);
  const wa = whatsappLink(locale, event.title, e.displayDate, event.venue);

  return (
    <article
      className={`tile p-6 sm:p-8 flex flex-col gap-5 h-full ${past ? "opacity-70" : ""}`}
    >
      <div className="flex items-baseline justify-between gap-4">
        <p className="uppercase-brand text-xs text-white">
          {e.displayDate}
          {event.time ? ` · ${event.time}` : ""}
        </p>
        <p className="uppercase-brand text-[11px] text-cream/60">
          {past ? tr.common.past : tr.common.upcoming}
        </p>
      </div>

      <div>
        <h3 className="uppercase-brand text-xl sm:text-2xl text-white leading-[1.04]">
          {event.title}
        </h3>
        <p className="uppercase-brand text-xs text-cream/70 mt-2">
          {event.city}, {e.country} — {event.venue}
        </p>
      </div>

      <p className="uppercase-brand text-[11px] text-cream/60">{e.format}</p>

      {e.description && (
        <p className="text-sm text-cream/70 normal-case font-normal leading-relaxed">
          {e.description}
        </p>
      )}

      <a
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        className="btn mt-auto self-start"
      >
        {past ? tr.common.moreInfos : tr.common.tickets}
      </a>
    </article>
  );
}
