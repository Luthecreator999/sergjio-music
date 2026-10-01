import type { Locale } from "./i18n";

/**
 * Photo library: every gallery and press-kit photo is titled here, once.
 *
 * To add a photo:
 *   1. Save a web-size JPEG (about 1200 px wide, sRGB) under /public/images/
 *      with a descriptive file name — search engines read it.
 *   2. Optional: save the full-resolution file under /public/press/ and set
 *      `press`; the press kits then offer that file for download.
 *   3. Add an entry below with a title and an alt text in both languages.
 *   4. Reference it where it should appear (dj/page.tsx, epk.ts).
 */
export type Photo = {
  /** Web-size file under /public/images. */
  src: string;
  /** Full-resolution file under /public/press, where one exists. */
  press?: string;
  /** Short title — shown as the caption in the press kits. */
  title: Record<Locale, string>;
  /** Describes what is visible — used as the alt text. */
  alt: Record<Locale, string>;
  /** CSS object-position used wherever the photo is cropped. Defaults to "center 25%". */
  position?: string;
};

export const PHOTOS = {
  // Vinyl set with live instruments (2026) — full resolution available.
  vinylRecord: {
    src: "/images/sergjio-vinyl-dj-set-record-in-hand.jpg",
    press: "/press/sergjio-vinyl-dj-set-record-in-hand.jpg",
    title: { de: "Vinyl-Set — Schallplatte in der Hand", en: "Vinyl set — record in hand" },
    alt: {
      de: "Sergjio steht mit Kopfhörern hinter zwei Plattenspielern und hält eine Schallplatte in der Hand",
      en: "Sergjio with headphones behind two turntables, holding a vinyl record",
    },
    position: "center 50%",
  },
  vinylTurntable: {
    src: "/images/sergjio-vinyl-dj-set-turntable.jpg",
    press: "/press/sergjio-vinyl-dj-set-turntable.jpg",
    title: { de: "Vinyl-Set — am Plattenspieler", en: "Vinyl set — at the turntable" },
    alt: {
      de: "Sergjio mit Kopfhörern am Plattenspieler, eine Hand an der Platte, die andere am Mixer",
      en: "Sergjio with headphones at the turntable, one hand on the record and one on the mixer",
    },
    position: "center 57%",
  },
  vinylMixer: {
    src: "/images/sergjio-vinyl-dj-set-mixer.jpg",
    press: "/press/sergjio-vinyl-dj-set-mixer.jpg",
    title: { de: "Vinyl-Set — am Mixer", en: "Vinyl set — at the mixer" },
    alt: {
      de: "Sergjio mit Kopfhörern am Mixer, daneben ein Plattenspieler",
      en: "Sergjio with headphones at the mixer, next to a turntable",
    },
    position: "center 55%",
  },
  cornetTurntable: {
    src: "/images/sergjio-cornet-and-turntable.jpg",
    press: "/press/sergjio-cornet-and-turntable.jpg",
    title: { de: "DJ-Set mit Cornet", en: "DJ set with cornet" },
    alt: {
      de: "Sergjio hält das Cornet in der einen Hand, die andere liegt am Plattenspieler",
      en: "Sergjio holding the cornet in one hand with the other on the turntable",
    },
    position: "center 55%",
  },
  cornetDjSet: {
    src: "/images/sergjio-cornet-live-dj-set.jpg",
    press: "/press/sergjio-cornet-live-dj-set.jpg",
    title: { de: "Cornet live im DJ-Set", en: "Cornet live in the DJ set" },
    alt: {
      de: "Sergjio spielt mit Kopfhörern Cornet hinter den Plattenspielern",
      en: "Sergjio with headphones playing the cornet behind the turntables",
    },
    position: "center 46%",
  },
  /** Landscape crop of cornetDjSet at full width, for wide heroes. */
  cornetDjSetWide: {
    src: "/images/sergjio-cornet-live-dj-set-wide.jpg",
    press: "/press/sergjio-cornet-live-dj-set.jpg",
    title: { de: "Cornet live im DJ-Set", en: "Cornet live in the DJ set" },
    alt: {
      de: "Sergjio spielt mit Kopfhörern Cornet, hinter ihm eine Stehlampe und Pflanzen",
      en: "Sergjio with headphones playing the cornet, a floor lamp and plants behind him",
    },
    position: "62% 20%",
  },
  cornetDjSetSide: {
    src: "/images/sergjio-cornet-live-side-view.jpg",
    press: "/press/sergjio-cornet-live-side-view.jpg",
    title: { de: "Cornet live im DJ-Set — Seitenansicht", en: "Cornet live in the DJ set — side view" },
    alt: {
      de: "Sergjio spielt Cornet neben dem Plattenspieler, von der Seite gesehen",
      en: "Sergjio playing the cornet next to the turntable, seen from the side",
    },
    position: "center 50%",
  },
  sazDjSet: {
    src: "/images/sergjio-electro-saz-live-dj-set.jpg",
    press: "/press/sergjio-electro-saz-live-dj-set.jpg",
    title: { de: "Elektro-Saz live im DJ-Set", en: "Electro saz live in the DJ set" },
    alt: {
      de: "Sergjio spielt die Elektro-Saz hinter den Plattenspielern",
      en: "Sergjio playing the electro saz behind the turntables",
    },
    position: "center 46%",
  },
  /** Landscape crop of sazDjSet at full width, for wide heroes. */
  sazDjSetWide: {
    src: "/images/sergjio-electro-saz-live-dj-set-wide.jpg",
    press: "/press/sergjio-electro-saz-live-dj-set.jpg",
    title: { de: "Elektro-Saz live im DJ-Set", en: "Electro saz live in the DJ set" },
    alt: {
      de: "Sergjio spielt die Elektro-Saz, hinter ihm Pflanzen und ein Regal",
      en: "Sergjio playing the electro saz, plants and a shelf behind him",
    },
    position: "center 20%",
  },
  sazDjSetSide: {
    src: "/images/sergjio-electro-saz-side-view.jpg",
    press: "/press/sergjio-electro-saz-side-view.jpg",
    title: { de: "Elektro-Saz live im DJ-Set — Seitenansicht", en: "Electro saz live in the DJ set — side view" },
    alt: {
      de: "Sergjio spielt die Elektro-Saz neben dem DJ-Pult, von der Seite gesehen",
      en: "Sergjio playing the electro saz next to the DJ desk, seen from the side",
    },
    position: "center 50%",
  },

  // Live on stage.
  cornetStage: {
    src: "/images/archive-live-1.jpg",
    title: { de: "Soprano Cornet auf der Bühne", en: "Soprano cornet on stage" },
    alt: {
      de: "Sergjio sitzt auf der Bühne und spielt Soprano Cornet, neben ihm stehen seine Saiteninstrumente",
      en: "Sergjio seated on stage playing the soprano cornet, his string instruments beside him",
    },
  },
  sazStage: {
    src: "/images/booking-portrait.jpg",
    title: { de: "Elektro-Saz auf der Bühne", en: "Electro saz on stage" },
    alt: {
      de: "Sergjio sitzt auf der Bühne und spielt die Elektro-Saz, vorne das Publikum",
      en: "Sergjio seated on stage playing the electro saz, the audience in the foreground",
    },
    position: "45% 50%",
  },
  stageBack: {
    src: "/images/sergjio-cornet-hero.jpg",
    title: { de: "Auf der Bühne — Rückenansicht", en: "On stage — from behind" },
    alt: {
      de: "Sergjio von hinten auf der Bühne, vor ihm ein Mikrofon und das Publikum",
      en: "Sergjio seen from behind on stage, a microphone and the audience in front of him",
    },
    position: "center 40%",
  },
  sazDetail: {
    src: "/images/about-portrait.jpg",
    title: { de: "Elektro-Saz — Detail", en: "Electro saz — detail" },
    alt: {
      de: "Nahaufnahme der Elektro-Saz mit Perlmutt-Einlagen, eine Hand an den Saiten",
      en: "Close-up of the electro saz with mother-of-pearl inlays, a hand on the strings",
    },
    position: "center",
  },

  // DJ in the club.
  djFront: {
    src: "/images/dj-live-5.jpg",
    title: { de: "Club-Set — frontal", en: "Club set — front view" },
    alt: {
      de: "DJ Sergjio mit Kopfhörern am DJ-Pult, von vorne",
      en: "DJ Sergjio with headphones at the decks, front view",
    },
  },
  djMixing: {
    src: "/images/dj-live-6.jpg",
    title: { de: "Club-Set — am Pult", en: "Club set — at the decks" },
    alt: {
      de: "DJ Sergjio mit Kopfhörern beim Mixen im roten Clublicht",
      en: "DJ Sergjio with headphones mixing in red club light",
    },
  },
  djLaughing: {
    src: "/images/archive-dj-1.jpeg",
    title: { de: "Club-Set — lachend", en: "Club set — laughing" },
    alt: {
      de: "DJ Sergjio lacht hinter dem DJ-Pult, die Kopfhörer in den Händen",
      en: "DJ Sergjio laughing behind the decks, headphones in his hands",
    },
    position: "60% 28%",
  },
  djProfile: {
    src: "/images/archive-dj-2.jpeg",
    title: { de: "Club-Set — Profil", en: "Club set — profile" },
    alt: {
      de: "DJ Sergjio mit Kopfhörern im Profil, eine Hand am Mixer",
      en: "DJ Sergjio with headphones in profile, one hand on the mixer",
    },
    position: "55% 22%",
  },
  djSide: {
    src: "/images/dj-live-2.jpg",
    title: { de: "Club-Set — Seitenansicht", en: "Club set — side view" },
    alt: {
      de: "DJ Sergjio mit Kopfhörern am DJ-Pult, von der Seite im blauen Licht",
      en: "DJ Sergjio with headphones at the decks, side view in blue light",
    },
    position: "40% 25%",
  },
  /** Landscape crop of djSide from the full-resolution original, for wide heroes. */
  djSideWide: {
    src: "/images/dj-live-2-wide.jpg",
    title: { de: "Club-Set — Seitenansicht", en: "Club set — side view" },
    alt: {
      de: "DJ Sergjio mit Kopfhörern im Profil, in rotem und blauem Clublicht",
      en: "DJ Sergjio with headphones in profile, in red and blue club light",
    },
    position: "62% 30%",
  },
  djJogWheel: {
    src: "/images/dj-booth-hero.jpg",
    title: { de: "DJ-Pult — Hand am Jogwheel", en: "DJ decks — hand on the jog wheel" },
    alt: {
      de: "Hand von Sergjio am Jogwheel des DJ-Controllers",
      en: "Sergjio's hand on the jog wheel of the DJ controller",
    },
    position: "center 75%",
  },
  djMixerDetail: {
    src: "/images/dj-live-1.jpg",
    title: { de: "DJ-Pult — Hand am Mixer", en: "DJ decks — hand on the mixer" },
    alt: {
      de: "Hand von Sergjio an den Reglern des Mixers, davor das Display mit Wellenformen",
      en: "Sergjio's hand on the mixer knobs, the waveform display in front",
    },
    position: "center 60%",
  },
  djController: {
    src: "/images/dj-live-4.jpg",
    title: { de: "DJ-Pult — Detail", en: "DJ decks — detail" },
    alt: {
      de: "Nahaufnahme des DJ-Controllers mit leuchtendem Jogwheel",
      en: "Close-up of the DJ controller with glowing jog wheel",
    },
    position: "center 85%",
  },
} as const satisfies Record<string, Photo>;
