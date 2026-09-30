import type { Locale } from "./i18n";

/** Booking profile an event counts towards — drives the references on the EPK pages. */
export type EventKind = "live" | "dj";

export type Event = {
  id: string;
  kinds: EventKind[];
  date: string;
  endDate?: string;
  displayDate: { de: string; en: string };
  time?: string;
  city: string;
  country: { de: string; en: string };
  venue: string;
  title: string;
  format: { de: string; en: string };
  description?: { de: string; en: string };
  /** Optional related links (e.g. a collaborating act's Instagram). */
  links?: { label: string; url: string }[];
};

// Local calendar date as YYYY-MM-DD. String comparison against event dates
// works because every event date uses the same zero-padded ISO format.
// `sv-SE` yields an ISO-8601 date; the CH timezone keeps the day boundary local.
// NOTE: evaluated once per render of the module — on statically-generated
// pages that means build time, so any page using upcoming/pastEvents must set
// `export const revalidate` (home, tour and the EPK pages do, at 24h) to keep
// the split fresh.
const TODAY = new Date().toLocaleDateString("sv-SE", { timeZone: "Europe/Zurich" });

export const EVENTS: Event[] = [
  {
    id: "fiesta-cumbia-vario-olten-2026-09-19",
    kinds: ["live"],
    date: "2026-09-19",
    displayDate: { de: "19. September 2026", en: "September 19, 2026" },
    city: "Olten",
    country: { de: "Schweiz", en: "Switzerland" },
    venue: "Vario Bar, Olten",
    title: "Fiesta Cumbia",
    format: { de: "Cumbia — Live", en: "Cumbia — Live" },
    description: {
      de: "Fiesta Cumbia mit Los Malditos Basureros in der Vario Bar Olten.",
      en: "Fiesta Cumbia with Los Malditos Basureros at Vario Bar Olten.",
    },
    links: [
      { label: "Los Malditos Basureros", url: "https://www.instagram.com/losmalditosbasureros/" },
    ],
  },
  {
    id: "saelischloessli-olten-2026-05-03",
    kinds: ["live"],
    date: "2026-05-03",
    displayDate: { de: "03. Mai 2026", en: "May 03, 2026" },
    time: "15:00",
    city: "Olten",
    country: { de: "Schweiz", en: "Switzerland" },
    venue: "Sälischlössli",
    title: "Sergjio Live @ Sälischlössli",
    format: { de: "Live-Musik", en: "Live Music" },
    description: {
      de: "Akustisches Live-Set hoch über Olten. Mikrotonale Instrumente, intime Atmosphäre.",
      en: "Acoustic live set high above Olten. Microtonal instruments, intimate atmosphere.",
    },
  },
  {
    id: "laendifestival-olten-2026-05-23",
    kinds: ["live", "dj"],
    date: "2026-05-23",
    displayDate: { de: "23. Mai 2026", en: "May 23, 2026" },
    city: "Olten",
    country: { de: "Schweiz", en: "Switzerland" },
    venue: "Ländifestival",
    title: "Sergjio @ Ländifestival",
    format: { de: "Live House DJ-Set mit Instrumenten", en: "Live House DJ Set with Instruments" },
    description: {
      de: "House DJ-Set mit Live-Instrumenten. Open Air an der Aare.",
      en: "House DJ set with live instruments. Open air by the Aare.",
    },
  },
  {
    id: "gretchen-berlin-physicalz-2026-05-30",
    kinds: ["dj"],
    date: "2026-05-30",
    displayDate: { de: "30. Mai 2026", en: "May 30, 2026" },
    city: "Berlin",
    country: { de: "Deutschland", en: "Germany" },
    venue: "Club Gretchen",
    title: "Sergjio with Physicalz",
    format: { de: "House — Club-Set", en: "House — Club Set" },
    description: {
      de: "Club-Show mit Physicalz im Gretchen Berlin. House mit kulturellem Twist.",
      en: "Club show with Physicalz at Gretchen Berlin. House with a cultural twist.",
    },
  },
  {
    id: "gretchen-berlin-solo-2026-05-30",
    kinds: ["live"],
    date: "2026-05-30",
    displayDate: { de: "30. Mai 2026", en: "May 30, 2026" },
    city: "Berlin",
    country: { de: "Deutschland", en: "Germany" },
    venue: "Club Gretchen",
    title: "Sergjio Live Solo Set",
    format: { de: "Live Solo — Instrumental House", en: "Live Solo — Instrumental House" },
    description: {
      de: "Solo-Live-Set mit Instrumenten. Mikrotonaler House.",
      en: "Solo live set with instruments. Microtonal House.",
    },
  },
  {
    id: "los-bassureros-openair-2026-06-19",
    kinds: ["live"],
    date: "2026-06-19",
    endDate: "2026-06-20",
    displayDate: { de: "19. & 20. Juni 2026", en: "June 19–20, 2026" },
    city: "Zürich",
    country: { de: "Schweiz", en: "Switzerland" },
    venue: "Open Air (Los Malditos Basureros)",
    title: "Live Concert with Los Malditos Basureros",
    format: { de: "Cumbia Band Live — Open Air", en: "Cumbia Band Live — Open Air" },
    description: {
      de: "Zwei Tage Open Air mit der Zürcher Cumbia-Band Los Malditos Basureros.",
      en: "Two days open air with Zurich's cumbia band Los Malditos Basureros.",
    },
  },
  {
    id: "fusion-festival-laerz-2026-06-27",
    kinds: ["dj"],
    date: "2026-06-27",
    displayDate: { de: "27. Juni 2026", en: "June 27, 2026" },
    city: "Lärz",
    country: { de: "Deutschland", en: "Germany" },
    venue: "Fusion Festival, Flugplatz Lärz, Mecklenburg",
    title: "Sergjio with Physicalz @ Fusion",
    format: { de: "House — Festival-Set", en: "House — Festival Set" },
    description: {
      de: "Set auf dem Fusion Festival in Mecklenburg-Vorpommern mit Physicalz.",
      en: "Set at Fusion Festival in Mecklenburg-Vorpommern with Physicalz.",
    },
  },
  {
    id: "vario-jungle-olten-2026-04-17",
    kinds: ["live"],
    date: "2026-04-17",
    displayDate: { de: "17. April 2026", en: "April 17, 2026" },
    city: "Olten",
    country: { de: "Schweiz", en: "Switzerland" },
    venue: "Vario Bar, Olten",
    title: "Vario in the Jungle",
    format: { de: "Live-Set", en: "Live Set" },
    description: { de: "Jungle Night in der Vario Bar.", en: "Jungle night at Vario Bar." },
  },
  {
    id: "vario-sergjio-live-olten-2026-04-17",
    kinds: ["live"],
    date: "2026-04-17",
    displayDate: { de: "17. April 2026", en: "April 17, 2026" },
    city: "Olten",
    country: { de: "Schweiz", en: "Switzerland" },
    venue: "Vario Bar, Olten",
    title: "Sergjio Live",
    format: { de: "Live-Set", en: "Live Set" },
    description: { de: "Sergjio Live in der Vario Bar.", en: "Sergjio live at Vario Bar." },
  },
  {
    id: "bassureros-dynamo-zuerich-2026-03-28",
    kinds: ["live"],
    date: "2026-03-28",
    displayDate: { de: "28. März 2026", en: "March 28, 2026" },
    city: "Zürich",
    country: { de: "Schweiz", en: "Switzerland" },
    venue: "Dynamo Werk21",
    title: "Live Concert Los Malditos Basureros",
    format: { de: "Live-Konzert", en: "Live Concert" },
    description: {
      de: "Live-Konzert mit Los Malditos Basureros im Dynamo Werk21.",
      en: "Live concert with Los Malditos Basureros at Dynamo Werk21.",
    },
  },
  {
    id: "ueberlingen-wintergarten-physicalz-2026-03-17",
    kinds: ["dj"],
    date: "2026-03-17",
    displayDate: { de: "17. März 2026", en: "March 17, 2026" },
    city: "Überlingen",
    country: { de: "Deutschland", en: "Germany" },
    venue: "Wintergarten",
    title: "Sergjio with Physicalz",
    format: { de: "House", en: "House" },
    description: {
      de: "House-Set mit Physicalz im Wintergarten Überlingen.",
      en: "House set with Physicalz at Wintergarten Überlingen.",
    },
  },
  {
    id: "ueberlingen-wintergarten-solo-2026-03-17",
    kinds: ["live"],
    date: "2026-03-17",
    displayDate: { de: "17. März 2026", en: "March 17, 2026" },
    city: "Überlingen",
    country: { de: "Deutschland", en: "Germany" },
    venue: "Wintergarten",
    title: "Sergjio Solo Live Set",
    format: { de: "Solo Live — House", en: "Solo Live — House" },
    description: {
      de: "Solo-Live-Set mit Instrumenten.",
      en: "Solo live set with instruments.",
    },
  },
  {
    id: "thun-mokka-physicalz-2026-03-07",
    kinds: ["dj"],
    date: "2026-03-07",
    displayDate: { de: "07. März 2026", en: "March 07, 2026" },
    city: "Thun",
    country: { de: "Schweiz", en: "Switzerland" },
    venue: "Mokka",
    title: "Sergjio with Physicalz",
    format: { de: "House", en: "House" },
    description: {
      de: "House-Set mit Physicalz im Mokka Thun.",
      en: "House set with Physicalz at Mokka Thun.",
    },
  },
  {
    id: "thun-mokka-solo-2026-03-07",
    kinds: ["live"],
    date: "2026-03-07",
    displayDate: { de: "07. März 2026", en: "March 07, 2026" },
    city: "Thun",
    country: { de: "Schweiz", en: "Switzerland" },
    venue: "Mokka",
    title: "Sergjio Solo Live Set",
    format: { de: "Solo Live — House", en: "Solo Live — House" },
    description: {
      de: "Solo-Live-Set mit Instrumenten im Mokka Thun.",
      en: "Solo live set with instruments at Mokka Thun.",
    },
  },
  {
    id: "basel-jamaica-charity-physicalz-2026-03-07",
    kinds: ["dj"],
    date: "2026-03-07",
    displayDate: { de: "07. März 2026", en: "March 07, 2026" },
    city: "Basel",
    country: { de: "Schweiz", en: "Switzerland" },
    venue: "Jamaica Charity Event",
    title: "Sergjio with Physicalz",
    format: { de: "House — Charity", en: "House — Charity" },
    description: {
      de: "Charity-Event in Basel mit Physicalz.",
      en: "Charity event in Basel with Physicalz.",
    },
  },
  {
    id: "the-spot-zuerich-2026-02-15",
    kinds: ["live"],
    date: "2026-02-15",
    displayDate: { de: "15. Februar 2026", en: "February 15, 2026" },
    city: "Zürich",
    country: { de: "Schweiz", en: "Switzerland" },
    venue: "The Spot, Zürich",
    title: "Sergjio Live",
    format: { de: "Live-Set", en: "Live Set" },
    description: { de: "Sergjio Live im The Spot.", en: "Sergjio live at The Spot." },
  },
  {
    id: "vario-olten-2026-01-10",
    kinds: ["live"],
    date: "2026-01-10",
    displayDate: { de: "10. Januar 2026", en: "January 10, 2026" },
    city: "Olten",
    country: { de: "Schweiz", en: "Switzerland" },
    venue: "Vario Bar, Olten",
    title: "Sergjio Live",
    format: { de: "Live-Set", en: "Live Set" },
    description: { de: "Sergjio Live in der Vario Bar.", en: "Sergjio live at Vario Bar." },
  },
];

export const upcomingEvents = () =>
  EVENTS.filter((e) => (e.endDate ?? e.date) >= TODAY).sort((a, b) => a.date.localeCompare(b.date));

export const pastEvents = () =>
  EVENTS.filter((e) => (e.endDate ?? e.date) < TODAY).sort((a, b) =>
    (b.endDate ?? b.date).localeCompare(a.endDate ?? a.date),
  );

/** Played shows of one booking profile, newest first. */
export const pastEventsOf = (kind: EventKind) => pastEvents().filter((e) => e.kinds.includes(kind));

export const localized = (e: Event, locale: Locale) => ({
  ...e,
  displayDate: e.displayDate[locale],
  country: e.country[locale],
  format: e.format[locale],
  description: e.description?.[locale],
});
