# Sergjio Music — Website

Next.js 16 + Tailwind v3 Build der Artist-Site für Sergjio (Live-Multiinstrumentalist & DJ, COL/CH).

Vorlage: [sergjiomusic.com](https://sergjiomusic.com/) (Framer). Diese Version ist als eigenständiges Next.js-Projekt aufgebaut, zweisprachig (DE/EN), voll mobile-tauglich und mit echten Event-Daten, WhatsApp-Booking-Links und zwei Press Kits (Live-EPK, DJ-EPK).

## Stack

- **Next.js 16** (App Router, RSC), Routen unter `[locale]` (`/de`, `/en`)
- **Tailwind CSS 3.4**
- **TypeScript**
- **next/font/google** für Big Shoulders Display
- **next/image** für alle Fotos

## Setup

```bash
pnpm install
pnpm dev
```

Dev-Server läuft auf `http://localhost:3000`.

## Checks & Build

```bash
pnpm typecheck
pnpm lint
pnpm build
pnpm start
```

## Struktur

```
src/
  app/
    layout.tsx             # Pass-through Root-Layout, Default-Metadaten
    page.tsx               # Redirect auf /de
    sitemap.ts, robots.ts
    [locale]/
      layout.tsx           # <html lang>, Header, Footer, JSON-LD
      page.tsx             # Homepage (Hero, Tour, About, YouTube, CTA)
      about/page.tsx       # About + Instrumente
      dj/page.tsx          # DJ-Set Seite + Galerie
      releases/page.tsx    # Discography
      tour/page.tsx        # Alle Termine (upcoming + past)
      booking/page.tsx     # Booking-Formular
      epk/page.tsx         # EPK-Übersicht
      epk/live/page.tsx    # Live-EPK
      epk/dj/page.tsx      # DJ-EPK
  components/
    Header.tsx             # Sticky Header mit Mobile-Burger
    Footer.tsx
    PageHero.tsx           # Gemeinsamer Seiten-Hero
    EventCard.tsx          # Event-Karte mit WhatsApp-Link
    BookingForm.tsx        # Booking-Form (Mailto + WhatsApp)
    EpkPage.tsx            # Ein Press Kit (von beiden EPK-Routen genutzt)
    SiteVideo.tsx, YouTubeEmbed.tsx, SoundcloudEmbed.tsx
  lib/
    i18n.ts                # Alle Texte DE/EN, Navigation
    seo.ts                 # Routenliste, Titel/Descriptions, JSON-LD
    site.ts                # SITE-Konstanten (Email, Phone, Social, Streaming)
    events.ts              # Alle Termine, sortiert in upcoming / past
    epk.ts                 # Fotos + Videos der beiden EPKs
    media.ts, youtube.ts   # Video-Registries
    whatsapp.ts            # WhatsApp-Deep-Link-Generator
public/
  images/                  # Fotos + Logo
  videos/                  # Selbst gehostete Videos
docs/
  epk-sergjio-text-de-en.pdf  # Offizieller EPK-Text (Quelle der Bio)
BRANDING.md                # Markenregeln (Farben, Typo, Komponenten)
```

## Inhalt

- **Events**: gepflegt in [src/lib/events.ts](src/lib/events.ts). Vergangene Termine landen automatisch unter "Past Shows", alles ab heute unter "Upcoming" (die Seiten werden täglich neu generiert). `kinds` legt fest, ob ein Termin als Referenz im Live-EPK, im DJ-EPK oder in beiden erscheint.
- **EPK**: `/epk` führt zu Live-EPK und DJ-EPK. Die Bio stammt aus [docs/epk-sergjio-text-de-en.pdf](docs/epk-sergjio-text-de-en.pdf) und liegt in [src/lib/i18n.ts](src/lib/i18n.ts) (`BIO`). Pressefotos und Videos pro EPK stehen in [src/lib/epk.ts](src/lib/epk.ts).
- **Fotos/Videos tauschen**: Datei nach `public/images/` bzw. `public/videos/` legen und den Pfad in der jeweiligen Seite oder in `epk.ts` anpassen. Neue Videos zuerst in [src/lib/media.ts](src/lib/media.ts) registrieren (Masse mit `ffprobe` oder `mdls` auslesen).
- **WhatsApp-Links**: jeder Event-Knopf öffnet WhatsApp mit voreingestelltem Text:
  > Ciao Sergjio, ich interessiere mich für den Event "{Titel}" am {Datum} im {Venue}. Hast du einen Ticket-Link oder mehr Infos für mich?
  Nummer: **+41 79 966 21 77**.

## Branding

Siehe [BRANDING.md](BRANDING.md). Kurzfassung:
- Schwarz + Cream + Weiss, sonst nichts.
- Big Shoulders Display, Weight 800/900, ALLES UPPERCASE für Brand-Text.
- Underground / Cinematic Look mit Hairline-Borders und Vollbild-Hero.

## Deploy

Optimiert für **Vercel** (Standard Next.js Setup). Domain via DNS auf Vercel zeigen, fertig.

```bash
vercel deploy
```

## Kontakt-Daten

- E-Mail: `ramonsergjio@gmail.com`
- Telefon / WhatsApp: `+41 79 966 21 77`
- Instagram: `@s.e.r.g.j.i.o`
- TikTok: `@sergjiomusic`
- YouTube: `@sergjio9931`
