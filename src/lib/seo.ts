import type { Metadata } from "next";
import { locales, defaultLocale, type Locale } from "./i18n";
import { SITE } from "./site";
import type { Event } from "./events";

/** Canonical production origin (custom domain on Vercel). */
export const SITE_URL = "https://sergjiomusic.ch";

/** Social preview image (1200×630, generated into /public). */
export const OG_IMAGE = "/og.jpg";

/** Route path for each page key, appended after the locale segment. */
export const PAGE_PATHS = {
  home: "",
  about: "/about",
  dj: "/dj",
  releases: "/releases",
  tour: "/tour",
  booking: "/booking",
  epk: "/epk",
  epkLive: "/epk/live",
  epkDj: "/epk/dj",
} as const;

export type PageKey = keyof typeof PAGE_PATHS;

/** Per-locale, per-page SEO copy. Kept separate from the UI DICT so titles
 *  and descriptions can be tuned for search without touching on-page strings. */
const META: Record<Locale, Record<PageKey, { title: string; description: string }>> = {
  de: {
    home: {
      title: "Sergjio — Live-Mikrotonal-Instrumente in elektronischer Musik",
      description:
        "Sergjio ist Live-Performer und DJ aus der Schweiz — Azeri Tar, Saz, Bağlama & Soprano Cornet treffen auf House und Club-Sound. Weltweit buchbar.",
    },
    about: {
      title: "Über Sergjio — Story & Instrumente",
      description:
        "Die Geschichte hinter Sergjio: klassische Ausbildung, mikrotonale Instrumente und der Raum zwischen organischem Ausdruck und zeitgenössischem Sound.",
    },
    dj: {
      title: "DJ Sergjio — House, Jungle & Club-Sets",
      description:
        "Energiegeladene DJ-Sets von Sergjio: House, Jungle, Cumbia und Club-Edits — mit Live-Instrumenten. Verfügbar für Clubs und Festivals weltweit.",
    },
    releases: {
      title: "Releases — Sergjio Musik & Mixes",
      description:
        "Aktuelle Releases, Mixes und Sets von Sergjio. Mikrotonaler House und elektronische Musik auf Soundcloud und YouTube.",
    },
    tour: {
      title: "Live-Termine — Sergjio on Tour",
      description:
        "Alle kommenden und vergangenen Live-Shows von Sergjio in der Schweiz und international. Tickets und Infos direkt via WhatsApp.",
    },
    booking: {
      title: "Booking — Sergjio buchen",
      description:
        "Sergjio für Live-Auftritte, DJ-Sets, Festivals und Private Events buchen. Direktkontakt für Presse, Veranstalter und Kollaborationen.",
    },
    epk: {
      title: "EPK — Sergjio, Live Multiinstrumentalist & DJ",
      description:
        "Electronic Press Kit von Sergjio: Bio, Pressefotos, Videos, Referenzen und Booking-Kontakt — als Live-EPK und als DJ-EPK.",
    },
    epkLive: {
      title: "Live-EPK — Sergjio mit Cornet & Saz",
      description:
        "Live-EPK von Sergjio: Bio, Pressefotos, Videos, Referenzen, Technical Rider und Booking-Kontakt für Live-Auftritte mit Cornet und Saz (Bağlama).",
    },
    epkDj: {
      title: "DJ-EPK — Sergjio, DJ-Sets mit Live-Instrumenten",
      description:
        "DJ-EPK von Sergjio: Bio, Pressefotos, Videos, Referenzen, Technical Rider und Booking-Kontakt für DJ-Sets mit Live-Instrumenten — digital oder auf Vinyl.",
    },
  },
  en: {
    home: {
      title: "Sergjio — Live microtonal instruments inside electronic music",
      description:
        "Sergjio is a Swiss-based live performer and DJ blending Azeri Tar, Saz, Bağlama and Soprano Cornet with House and club sound. Bookings worldwide.",
    },
    about: {
      title: "About Sergjio — Story & Instruments",
      description:
        "The story behind Sergjio: classical training, microtonal instruments and the space between organic expression and contemporary electronic sound.",
    },
    dj: {
      title: "DJ Sergjio — House, Jungle & Club Sets",
      description:
        "High-energy DJ sets from Sergjio: House, Jungle, Cumbia and club edits — with live instruments. Available for clubs and festivals worldwide.",
    },
    releases: {
      title: "Releases — Sergjio Music & Mixes",
      description:
        "Latest releases, mixes and sets from Sergjio. Microtonal House and electronic music on Soundcloud and YouTube.",
    },
    tour: {
      title: "Live Shows — Sergjio on Tour",
      description:
        "All upcoming and past live shows from Sergjio across Switzerland and internationally. Tickets and info straight via WhatsApp.",
    },
    booking: {
      title: "Booking — Book Sergjio",
      description:
        "Book Sergjio for live performances, DJ sets, festivals and private events. Direct contact for press, organizers and collaborations.",
    },
    epk: {
      title: "EPK — Sergjio, Live Multi-Instrumentalist & DJ",
      description:
        "Electronic press kit for Sergjio: bio, press photos, videos, references and booking contact — as a live EPK and a DJ EPK.",
    },
    epkLive: {
      title: "Live EPK — Sergjio with Cornet & Saz",
      description:
        "Sergjio's live EPK: bio, press photos, videos, references, technical rider and booking contact for live performances with cornet and saz (bağlama).",
    },
    epkDj: {
      title: "DJ EPK — Sergjio, DJ Sets with Live Instruments",
      description:
        "Sergjio's DJ EPK: bio, press photos, videos, references, technical rider and booking contact for DJ sets with live instruments — digital or on vinyl.",
    },
  },
};

/** Build a full Next.js Metadata object for a given locale + page, including
 *  canonical URL, hreflang alternates, Open Graph and Twitter cards. */
export function pageMetadata(locale: Locale, page: PageKey): Metadata {
  const { title, description } = META[locale][page];
  const path = PAGE_PATHS[page];
  const canonical = `/${locale}${path}`;

  const languages: Record<string, string> = {};
  for (const l of locales) languages[l] = `/${l}${path}`;
  languages["x-default"] = `/${defaultLocale}${path}`;

  return {
    title,
    description,
    alternates: { canonical, languages },
    openGraph: {
      type: "website",
      siteName: SITE.name,
      title,
      description,
      url: canonical,
      locale: locale === "de" ? "de_CH" : "en_US",
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: SITE.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE],
    },
  };
}

/** schema.org MusicGroup describing the artist — emitted site-wide. */
export function musicGroupSchema(locale: Locale): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    name: "Sergjio",
    alternateName: SITE.name,
    url: `${SITE_URL}/${locale}`,
    image: `${SITE_URL}${OG_IMAGE}`,
    genre: ["House", "Electronic", "Microtonal", "World Fusion"],
    description:
      locale === "de"
        ? "Live-Performer und DJ aus der Schweiz — mikrotonale Instrumente in elektronischer Musik."
        : "Swiss-based live performer and DJ — microtonal instruments inside electronic music.",
    sameAs: [
      SITE.social.instagram.url,
      SITE.social.tiktok.url,
      SITE.social.youtube.url,
      SITE.streaming.soundcloud.url,
    ],
  };
}

/** Map localized country names to ISO 3166-1 alpha-2 codes for schema.org. */
const COUNTRY_CODE: Record<string, string> = {
  Schweiz: "CH",
  Switzerland: "CH",
  Deutschland: "DE",
  Germany: "DE",
};

/**
 * DST-aware UTC offset (e.g. "+02:00" / "+01:00") for a Europe/Zurich date,
 * so a MusicEvent start time carries an explicit zone instead of being treated
 * as floating/UTC by crawlers. Noon UTC avoids midnight DST edge cases.
 */
function zurichOffset(dateISO: string): string {
  const tzName =
    new Intl.DateTimeFormat("en-US", {
      timeZone: "Europe/Zurich",
      timeZoneName: "longOffset",
    })
      .formatToParts(new Date(`${dateISO}T12:00:00Z`))
      .find((p) => p.type === "timeZoneName")?.value ?? "GMT+01:00";
  return tzName.match(/([+-]\d{2}:\d{2})/)?.[1] ?? "+01:00";
}

/** schema.org MusicEvent list for the tour/live dates. */
export function eventsSchema(events: Event[], locale: Locale): Record<string, unknown>[] {
  return events.map((e) => ({
    "@context": "https://schema.org",
    "@type": "MusicEvent",
    name: e.title,
    // Full ISO-8601 dateTime with a DST-correct Zurich offset when a start
    // time is known; otherwise date-only.
    startDate: e.time ? `${e.date}T${e.time}:00${zurichOffset(e.date)}` : e.date,
    ...(e.endDate ? { endDate: e.endDate } : {}),
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    image: `${SITE_URL}${OG_IMAGE}`,
    location: {
      "@type": "Place",
      name: e.venue,
      address: {
        "@type": "PostalAddress",
        addressLocality: e.city,
        addressCountry: COUNTRY_CODE[e.country[locale]] ?? e.country[locale],
      },
    },
    performer: {
      "@type": "MusicGroup",
      name: "Sergjio",
      url: `${SITE_URL}/${locale}`,
      sameAs: [
        SITE.social.instagram.url,
        SITE.social.tiktok.url,
        SITE.social.youtube.url,
        SITE.streaming.soundcloud.url,
      ],
    },
    url: `${SITE_URL}/${locale}/tour`,
  }));
}

