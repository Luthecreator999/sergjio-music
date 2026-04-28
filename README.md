# Sergjio Music — Website

Next.js 15 + Tailwind v3 Build der Artist-Site für Sergjio (Live-Musiker, DJ, Drum &amp; Bass mit Mikrotonal-Instrumenten).

Vorlage: [sergjiomusic.com](https://sergjiomusic.com/) (Framer). Diese Version ist 1:1 in Optik, aber als eigenständiges Next.js-Projekt aufgebaut, voll mobile-tauglich und mit echten Event-Daten + WhatsApp-Booking-Links.

## Stack

- **Next.js 15** (App Router, RSC)
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

## Build

```bash
pnpm build
pnpm start
```

## Struktur

```
src/
  app/
    layout.tsx        # Root-Layout, Header, Footer, Big Shoulders Font
    page.tsx          # Homepage (Hero, Tour, About, YouTube, CTA)
    about/page.tsx    # About + Instrumente
    dj/page.tsx       # DJ-Set Seite + Galerie
    releases/page.tsx # Discography
    tour/page.tsx     # Alle Termine (upcoming + past)
    booking/page.tsx  # Booking-Formular
    globals.css
  components/
    Header.tsx        # Sticky Header mit Mobile-Burger
    Footer.tsx
    EventCard.tsx     # Event-Karte mit WhatsApp-Link
    BookingForm.tsx   # Booking-Form (Mailto + WhatsApp)
  lib/
    site.ts           # SITE-Konstanten (Email, Phone, Social, Streaming)
    events.ts         # Alle Termine, sortiert in upcoming / past
    whatsapp.ts       # WhatsApp-Deep-Link-Generator
public/
  images/             # 41 Originalfotos + Logo
BRANDING.md           # Markenregeln (Farben, Typo, Komponenten)
```

## Inhalt

- **Events**: gepflegt in [src/lib/events.ts](src/lib/events.ts). Vergangene Termine landen automatisch unter "Past Shows", alles ab heute (2026-04-28) unter "Upcoming".
- **WhatsApp-Links**: jeder Event-Knopf öffnet WhatsApp mit voreingestelltem Text:
  > Ciao Sergjio, ich interessiere mich für den Event "{Titel}" am {Datum} im {Venue}. Hast du einen Ticket-Link oder mehr Infos für mich?
  Nummer: **+41 79 966 21 77**.
- **Bilder**: 41 Originalfotos aus framerusercontent.com lokal in `public/images/` gespeichert.

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
