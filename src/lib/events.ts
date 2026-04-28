import type { Locale } from "./i18n";

export type Event = {
  id: string;
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
};

const TODAY = "2026-04-28";

export const EVENTS: Event[] = [
  {
    id: "saelischloessli-olten-2026-05-03",
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
    date: "2026-05-23",
    displayDate: { de: "23. Mai 2026", en: "May 23, 2026" },
    city: "Olten",
    country: { de: "Schweiz", en: "Switzerland" },
    venue: "Ländifestival",
    title: "Sergjio @ Ländifestival",
    format: { de: "Live DnB DJ-Set mit Instrumenten", en: "Live DnB DJ Set with Instruments" },
    description: {
      de: "Drum & Bass DJ-Set mit Live-Instrumenten. Open Air an der Aare.",
      en: "Drum & Bass DJ set with live instruments. Open air by the Aare.",
    },
  },
  {
    id: "gretchen-berlin-physicalz-2026-05-30",
    date: "2026-05-30",
    displayDate: { de: "30. Mai 2026", en: "May 30, 2026" },
    city: "Berlin",
    country: { de: "Deutschland", en: "Germany" },
    venue: "Club Gretchen",
    title: "Sergjio with Physicalz",
    format: { de: "Drum and Bass — Club-Set", en: "Drum and Bass — Club Set" },
    description: {
      de: "Club-Show mit Physicalz im Gretchen Berlin. Drum and Bass mit kulturellem Twist.",
      en: "Club show with Physicalz at Gretchen Berlin. Drum and Bass with a cultural twist.",
    },
  },
  {
    id: "gretchen-berlin-solo-2026-05-30",
    date: "2026-05-30",
    displayDate: { de: "30. Mai 2026", en: "May 30, 2026" },
    city: "Berlin",
    country: { de: "Deutschland", en: "Germany" },
    venue: "Club Gretchen",
    title: "Sergjio Live Solo Set",
    format: { de: "Live Solo — Instrumental Drum and Bass", en: "Live Solo — Instrumental Drum and Bass" },
    description: {
      de: "Solo-Live-Set mit Instrumenten. Mikrotonaler DnB.",
      en: "Solo live set with instruments. Microtonal DnB.",
    },
  },
  {
    id: "los-bassureros-openair-2026-06-19",
    date: "2026-06-19",
    endDate: "2026-06-20",
    displayDate: { de: "19. & 20. Juni 2026", en: "June 19–20, 2026" },
    city: "Zürich",
    country: { de: "Schweiz", en: "Switzerland" },
    venue: "Open Air (Los Bassureros)",
    title: "Live Concert with Los Bassureros",
    format: { de: "Cumbia Band Live — Open Air", en: "Cumbia Band Live — Open Air" },
    description: {
      de: "Zwei Tage Open Air mit der Zürcher Cumbia-Band Los Bassureros.",
      en: "Two days open air with Zurich's cumbia band Los Bassureros.",
    },
  },
  {
    id: "fusion-festival-laerz-2026-06-27",
    date: "2026-06-27",
    displayDate: { de: "27. Juni 2026", en: "June 27, 2026" },
    city: "Lärz",
    country: { de: "Deutschland", en: "Germany" },
    venue: "Fusion Festival, Flugplatz Lärz, Mecklenburg",
    title: "Sergjio with Physicalz @ Fusion",
    format: { de: "Drum and Bass — Festival-Set", en: "Drum and Bass — Festival Set" },
    description: {
      de: "Set auf dem Fusion Festival in Mecklenburg-Vorpommern mit Physicalz.",
      en: "Set at Fusion Festival in Mecklenburg-Vorpommern with Physicalz.",
    },
  },
  {
    id: "vario-jungle-olten-2026-04-17",
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
    date: "2026-03-28",
    displayDate: { de: "28. März 2026", en: "March 28, 2026" },
    city: "Zürich",
    country: { de: "Schweiz", en: "Switzerland" },
    venue: "Dynamo Werk21",
    title: "Live Concert Bassureros",
    format: { de: "Live-Konzert", en: "Live Concert" },
    description: {
      de: "Live-Konzert mit Bassureros im Dynamo Werk21.",
      en: "Live concert with Bassureros at Dynamo Werk21.",
    },
  },
  {
    id: "ueberlingen-wintergarten-physicalz-2026-03-17",
    date: "2026-03-17",
    displayDate: { de: "17. März 2026", en: "March 17, 2026" },
    city: "Überlingen",
    country: { de: "Deutschland", en: "Germany" },
    venue: "Wintergarten",
    title: "Sergjio with Physicalz",
    format: { de: "Drum and Bass", en: "Drum and Bass" },
    description: {
      de: "DnB-Set mit Physicalz im Wintergarten Überlingen.",
      en: "DnB set with Physicalz at Wintergarten Überlingen.",
    },
  },
  {
    id: "ueberlingen-wintergarten-solo-2026-03-17",
    date: "2026-03-17",
    displayDate: { de: "17. März 2026", en: "March 17, 2026" },
    city: "Überlingen",
    country: { de: "Deutschland", en: "Germany" },
    venue: "Wintergarten",
    title: "Sergjio Solo Live Set",
    format: { de: "Solo Live — Drum and Bass", en: "Solo Live — Drum and Bass" },
    description: {
      de: "Solo-Live-Set mit Instrumenten.",
      en: "Solo live set with instruments.",
    },
  },
  {
    id: "thun-mokka-physicalz-2026-03-07",
    date: "2026-03-07",
    displayDate: { de: "07. März 2026", en: "March 07, 2026" },
    city: "Thun",
    country: { de: "Schweiz", en: "Switzerland" },
    venue: "Mokka",
    title: "Sergjio with Physicalz",
    format: { de: "Drum and Bass", en: "Drum and Bass" },
    description: {
      de: "DnB-Set mit Physicalz im Mokka Thun.",
      en: "DnB set with Physicalz at Mokka Thun.",
    },
  },
  {
    id: "thun-mokka-solo-2026-03-07",
    date: "2026-03-07",
    displayDate: { de: "07. März 2026", en: "March 07, 2026" },
    city: "Thun",
    country: { de: "Schweiz", en: "Switzerland" },
    venue: "Mokka",
    title: "Sergjio Solo Live Set",
    format: { de: "Solo Live — Drum and Bass", en: "Solo Live — Drum and Bass" },
    description: {
      de: "Solo-Live-Set mit Instrumenten im Mokka Thun.",
      en: "Solo live set with instruments at Mokka Thun.",
    },
  },
  {
    id: "basel-jamaica-charity-physicalz-2026-03-07",
    date: "2026-03-07",
    displayDate: { de: "07. März 2026", en: "March 07, 2026" },
    city: "Basel",
    country: { de: "Schweiz", en: "Switzerland" },
    venue: "Jamaica Charity Event",
    title: "Sergjio with Physicalz",
    format: { de: "Drum and Bass — Charity", en: "Drum and Bass — Charity" },
    description: {
      de: "Charity-Event in Basel mit Physicalz.",
      en: "Charity event in Basel with Physicalz.",
    },
  },
  {
    id: "the-spot-zuerich-2026-02-15",
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
  EVENTS.filter((e) => (e.endDate ?? e.date) < TODAY).sort((a, b) => b.date.localeCompare(a.date));

export const localized = (e: Event, locale: Locale) => ({
  ...e,
  displayDate: e.displayDate[locale],
  country: e.country[locale],
  format: e.format[locale],
  description: e.description?.[locale],
});
