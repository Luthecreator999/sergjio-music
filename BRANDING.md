# Sergjio Music — Branding-Regeln

Visuelle Identität für sergjiomusic.com — abgeleitet von der bestehenden Framer-Site und in diesem Next.js-Projekt umgesetzt.

## 1. Stimmung & Haltung

- **Underground · Cinematic · Brutalist · Live**
- Plakat-/Festival-Look. Maximal reduziert.
- Fokus auf Live-Performance, Mikrotonalität und Improvisation — nicht auf Personenkult.
- Tonalität in Texten: poetisch, präsens, kurz. Englisch für internationale Buchungen, Deutsch für lokale Kommunikation (z. B. WhatsApp).

## 2. Farben

| Token | Hex | Verwendung |
|---|---|---|
| `ink` | `#000000` | Primärer Hintergrund (Body, Sektionen) |
| `cream` | `#cccccc` | Brand-Textfarbe (Body, Buttons, Headlines secondary) |
| Reinweiss | `#ffffff` | Headlines, Hero-Texte, aktive Buttons |
| Hairline | `rgba(204,204,204,0.20)` | Borders, Cards, dezente Linien |
| Hairline strong | `rgba(204,204,204,0.35)` | Button-Borders, Form-Inputs |
| Tile | `rgba(204,204,204,0.05)` | Karten-Hintergrund |

**Regel:** Niemals farbige Akzente. Monochrom = Markenkern. Das schafft Wiedererkennbarkeit und schiebt die Bilder/Music in den Vordergrund.

## 3. Typografie

- **Eine Schrift: Big Shoulders Display** (Google Fonts, geladen via `next/font`).
- Gewichte: **800** (Standard) und **900** (Hero / starke Akzente).
- **ALLES UPPERCASE** für Brand-Texte, Headlines, Buttons, Navigation, Captions.
- Body-Fließtext (Erklärtexte, Bios) darf normal-case + Weight 400 sein, damit die Lesbarkeit erhalten bleibt.

### Skala (Tailwind tokens in `tailwind.config.ts`)

| Token | Größe | Line-Height | Beispiel |
|---|---|---|---|
| `text-display-xl` | clamp(2.75rem, 8vw, 6rem) | 1.04 | Hero H1 |
| `text-display-lg` | clamp(2rem, 6vw, 3.75rem) | 1.04 | Section H2 |
| `text-display-md` | clamp(1.5rem, 3.5vw, 2rem) | 1.04 | Sub-Headlines |
| `text-base` | 16px | 1.6 | Body-Text |
| `text-xs` | 12px | 1.32 | Captions / Labels |
| `text-[11px]` | 11px | 1.32 | Footer / Meta |

Letter-Spacing: `tracking-brand` = `0.02em` für Caps-Texte.

## 4. Layout

- Maximalbreite Site-Container: **1280px** (`max-w-site`).
- Side-Padding: **20px** mobile, **32px** sm, **48px** lg.
- Section-Padding vertikal: **80px** mobile, **112px** desktop (= `py-20 sm:py-28`).
- Grids: 1 Spalte mobile → 2 sm → 3 lg, mit `gap-5` bis `gap-6`.
- Hairline-Borders (1px Cream 20%) statt Schatten oder farbige Trennlinien.

## 5. Komponenten

- **Buttons:**
  - `.btn` — transparent, Cream-Border, hover invertiert zu solid Cream + schwarzer Schrift.
  - `.btn-solid` — solid Cream, hover wird Reinweiss. Für Primär-CTAs.
- **Cards:** `.card` — `hairline` + 5%-Tile-Hintergrund. Hover macht Border stärker.
- **Hero:** Vollbild-Foto mit dunklem Verlauf (`from-ink/60 via-ink/40 to-ink`), Headline am unteren Rand.
- **Header:** transparent über Hero, ab 8 px Scroll wechselt zu `bg-ink/90 backdrop-blur`.

## 6. Bildsprache

- Schwarz-Weiss / stark entsättigt. Live-Performance, Spotlight, Gegenlicht.
- Hochkant-Portraits für Hero und About. Querformat für DJ-Galerie.
- Bilder bekommen leichte Opacity-Reduktion (60–70%) wenn Text drüberliegt.
- Quelle: alle 41 Originalfotos aus `/public/images/` (von sergjiomusic.com lokalisiert).

## 7. Bewegung

- Sehr dezent. Keine Parallax, kein Cursor-Effekt.
- Buttons / Cards: 200 ms Color Transitions.
- Bilder: 500 ms `scale-105` Hover.
- Mobile-Drawer: `translate-x` 300 ms.

## 8. WhatsApp-Konvention

Alle Event-Cards verlinken zu WhatsApp mit dem Pre-Set-Text:

> Ciao Sergjio, ich interessiere mich für den Event "{Title}" am {Datum} im {Venue}. Hast du einen Ticket-Link oder mehr Infos für mich?

- Nummer: **+41 79 966 21 77**
- Implementiert in [src/lib/whatsapp.ts](src/lib/whatsapp.ts)

## 9. Tone-of-Voice

- Englisch in der Hauptnavigation und globalen Headlines (international).
- Deutsch in Event-Beschreibungen und WhatsApp-Texten (lokales Publikum).
- Kurze, plakative Statements. Niemals Marketing-Geschwafel.
- Cultural Roots immer sichtbar: Azeri Tar, Saz, Bağlama, Mikrotonal, Drum & Bass.

## 10. Don'ts

- Keine farbigen Akzente.
- Keine zweite Schrift.
- Keine Schatten / Glow / Gradient-Buttons.
- Keine Stockfotos.
- Keine ae/oe/ue — immer echte Umlaute (ä, ö, ü).
