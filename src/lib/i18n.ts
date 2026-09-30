import type { EventKind } from "./events";

export const locales = ["de", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "de";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

type Dict = {
  nav: { story: string; dj: string; music: string; tour: string; epk: string; booking: string };
  common: {
    available: string;
    listen: string;
    follow: string;
    listenOn: string;
    streamOn: string;
    bookSergjio: string;
    bookDj: string;
    seeAll: string;
    seeAllShows: string;
    moreInfos: string;
    tickets: string;
    upcoming: string;
    past: string;
    noUpcoming: string;
    available_for: string;
    based_in: string;
    travels: string;
    festivalsClubsPrivate: string;
    switzerland: string;
    international: string;
    watch: string;
    aboutSergjio: string;
    djSergjio: string;
    skipToContent: string;
    menu: string;
    closeMenu: string;
  };
  home: {
    location: string;
    title: string;
    tagline: string;
    tourLabel: string;
    upcomingShows: string;
    aboutTitle: string;
    aboutP1: string;
    aboutP2: string;
    youtubeTitle: string;
    ctaTitle: string;
    ctaSub: string;
    ctaBtn: string;
  };
  about: {
    label: string;
    title: string;
    storyTitle: string;
    p1: string;
    p2: string;
    p3: string;
    spaces: string;
    features: { h: string; p: string }[];
    instrumentsTitle: string;
    quote: string;
  };
  dj: {
    label: string;
    title: string;
    sub: string;
    intro: string;
    features: { h: string; p: string }[];
    galleryTitle: string;
    liveFeed: string;
    latestTitle: string;
    openSoundcloud: string;
    playSoundcloud: string;
  };
  tour: {
    label: string;
    title: string;
    upcomingTitle: string;
    pastTitle: string;
    stats: { v: string; l: string }[];
  };
  releases: {
    label: string;
    title: string;
    streamOn: string;
    listenNow: string;
  };
  booking: {
    label: string;
    title: string;
    sub: string;
    direct: string;
    formTitle: string;
    fields: { name: string; email: string; phone: string; category: string; message: string };
    categories: string[];
    sendEmail: string;
    sendWa: string;
  };
  epk: {
    label: string;
    title: string;
    tagline: string;
    intro: string;
    open: string;
    bioTitle: string;
    videosTitle: string;
    photosTitle: string;
    photosNote: string;
    download: string;
    referencesTitle: string;
    riderTitle: string;
    riderText: string;
    riderButton: string;
    contactTitle: string;
    whatsapp: string;
    profiles: Record<EventKind, { title: string; sub: string; teaser: string; bio: string[] }>;
  };
  footer: {
    listenOn: string;
    followOn: string;
    description: string;
  };
  whatsapp: {
    eventInquiry: (title: string, date: string, venue: string) => string;
    eventPastInquiry: (title: string, date: string, venue: string) => string;
    bookingInquiry: (category: string, name: string, msg: string) => string;
    epkInquiry: (profile: string) => string;
  };
};

/**
 * EPK bio from Sergjio's own text (docs/epk-sergjio-text-de-en.pdf), split into
 * its paragraphs so the Live-EPK and the DJ-EPK can each show the ones that
 * fit. German follows the supplied text apart from spelling; the English
 * wording is lightly copy-edited.
 */
const BIO = {
  de: {
    origin:
      "Sergjio ist ein vielseitiger Musiker, mikrotonaler Multiinstrumentalist und DJ aus der Schweiz mit kolumbianischen Wurzeln. Seine musikalische Reise begann bereits im frühen Kindesalter auf dem Cornet und führte ihn bis in die Eliteformation der Swiss Army Brass Band, wo er als Soprano Cornetist auf höchstem Niveau performte.",
    band: "Heute ist Sergjio ein fester Bestandteil der Zürcher Cumbia Band «Los Malditos Basureros», wo er zu der Energie tropischer Live-Musik mit seinen Instrumenten und seinem Vibe beiträgt.",
    electronic:
      "Seine musikalische Heimat hat er schon früh in der elektronischen Musik gefunden. Sei es Downtempo, groovige, soulful House Music, mystischer orientalischer House oder auch treibender Techno und vieles mehr. Sein Herz schlägt in allen BPM-Raten.",
    fusion:
      "Unter seinem Alias Sergjio ist sein Markenzeichen die einzigartige Fusion aus DJ-Sets und Live-Instrumenten. Er integriert sein virtuos gespieltes Cornet nahtlos in seine Sets und erschafft so eine unverwechselbare Klangwelt zwischen Club-Energie und musikalischer Tiefe. Gleichzeitig bindet er die Saz (Bağlama), ein mikrotonales Saiteninstrument, in seine Performances ein und erweitert seinen Sound um orientalische Klangfarben sowie improvisatorische Elemente.",
    style:
      "Sein Stil wird zusätzlich durch Einflüsse verschiedenster Genres und Kulturen geprägt, wodurch ein moderner, grenzenloser Sound entsteht, der Club- und Live-Musik auf ein neues Level hebt.",
    vinyl:
      "Nebst digitalem DJing liebt er es, mit Vinyl-Schallplatten aufzulegen und mit Instrumenten zu fusionieren.",
    closing:
      "Sergjio steht für authentische Live-Performance, musikalische Vielfalt und die Verschmelzung von elektronischer Clubkultur mit echter Instrumentalkunst – ein Künstler, der Tanzmusik neu definiert.",
  },
  en: {
    origin:
      "Sergjio is a versatile musician, microtonal multi-instrumentalist and DJ from Switzerland with Colombian roots. His musical journey began in early childhood on the cornet and led him to the elite formation of the Swiss Army Brass Band, where he performed at the highest level as a soprano cornetist.",
    band: "Today, Sergjio is a core member of the Zurich cumbia band Los Malditos Basureros, where he contributes to the energy of tropical live music with his instruments and his vibe.",
    electronic:
      "He found his musical home in electronic music early on. Be it downtempo, groovy, soulful house music, mystic oriental house or driving techno and much more. His heart beats in all BPM ranges.",
    fusion:
      "Performing under his alias Sergjio, his trademark is the unique fusion of DJ sets and live instruments. He seamlessly integrates his virtuosic cornet playing into his sets, creating a distinctive soundscape that balances club energy with musical depth. At the same time, he incorporates the saz (bağlama), a microtonal string instrument, into his performances, adding oriental tonal colors and improvisational elements to his sound.",
    style:
      "His style is further shaped by influences from a wide range of genres and cultures, resulting in a modern, boundary-pushing sound that elevates both club and live music to a new level.",
    vinyl:
      "Besides digital DJing, he loves to play vinyl records and fuse them with live instruments.",
    closing:
      "Sergjio stands for authentic live performance, musical diversity and the fusion of electronic club culture with real instrumental artistry — an artist redefining dance music.",
  },
} as const;

export const DICT: Record<Locale, Dict> = {
  de: {
    nav: { story: "Story", dj: "DJ Sets", music: "Musik", tour: "Live Termine", epk: "EPK", booking: "Booking" },
    common: {
      available: "Weltweit verfügbar",
      listen: "Hören",
      follow: "Folgen",
      listenOn: "Hör Sergjio auf",
      streamOn: "Streamen auf",
      bookSergjio: "Sergjio buchen",
      bookDj: "DJ Sergjio buchen",
      seeAll: "Alle anzeigen",
      seeAllShows: "Alle Termine",
      moreInfos: "Mehr Infos",
      tickets: "Tickets via WhatsApp",
      upcoming: "Kommend",
      past: "Vergangen",
      noUpcoming: "Aktuell keine kommenden Shows.",
      available_for: "Verfügbar für",
      based_in: "Basis",
      travels: "Reist",
      festivalsClubsPrivate: "Festivals · Clubs · Private Events",
      switzerland: "Schweiz",
      international: "International",
      watch: "Anschauen",
      aboutSergjio: "Über Sergjio",
      djSergjio: "DJ Sergjio",
      skipToContent: "Zum Inhalt springen",
      menu: "Menü öffnen",
      closeMenu: "Menü schliessen",
    },
    home: {
      location: "Schweiz · Weltweit verfügbar",
      title: "Sergjio Music",
      tagline: "Live-Mikrotonal-Instrumente in elektronischer Musik",
      tourLabel: "#sergjioontour",
      upcomingShows: "Kommende Shows",
      aboutTitle: "Sergjio Music",
      aboutP1:
        "Sergjios Sound lebt vom Charakter echter Live-Instrumente — Azeri Tar, Uzun Saz Bağlama und Soprano Cornet — und erschafft warme, emotionale Klanglandschaften, die zum tiefen Hinhören einladen.",
      aboutP2:
        "Verwurzelt in klassischer Ausbildung und kulturellen Traditionen erkundet er den Raum zwischen organischem Ausdruck und zeitgenössischer elektronischer Musik — House, Cumbia, Club.",
      youtubeTitle: "Auf YouTube ansehen",
      ctaTitle: "Musik, die im Moment lebt",
      ctaSub:
        "Sergjio spielt mit ausdrucksstarken Live-Instrumenten. Jeder Auftritt wird vom Raum, vom Publikum und von der Emotion des Augenblicks geformt.",
      ctaBtn: "Booking & Anfragen",
    },
    about: {
      label: "Über",
      title: "Über Sergjio Music",
      storyTitle: "Meine Story",
      p1: "Sergjio ist Musiker und Live-Performer, dessen Arbeit sich um akustische und mikrotonale Instrumente dreht. Verwurzelt in klassischer Ausbildung und kulturellen Klangtraditionen, erkunden seine Auftritte den Raum zwischen organischem Ausdruck und zeitgenössischem Sound.",
      p2: "Jeder instrumentale Auftritt entsteht live — die Instrumente sind das zentrale Element, nicht Beiwerk. So entstehen Momente, die intim, menschlich und tief mit der Gegenwart verbunden sind.",
      p3: "Neben seiner instrumentalen Arbeit spielt Sergjio auch DJ-Sets, die elektronische Musik in einem eigenen Kontext erkunden. Statt im Rampenlicht zu stehen, lässt er die Musik führen — Sound, Atmosphäre und Emotion leiten das Erlebnis.",
      spaces: "Kulturelle Räume · Festivals · Underground · Edle Privat-Events.",
      features: [
        { h: "Live-Instrumental-Performance", p: "Mikrotonale Instrumente in immersivem Live-Ausdruck." },
        { h: "Emotionsgetriebener Auftritt", p: "Intim, atmosphärisch und kraftvoll." },
        { h: "Traditionelle Instrumente", p: "Azeri Tar, Saz, Bağlama & Soprano Cornet." },
      ],
      instrumentsTitle: "Sergjios Instrumente",
      quote:
        "Jede Bühne ist ein Reset — nichts zurückgehalten. Ich gebe dem Publikum jedes Mal die roheste Version von mir, weil sich nur so alles wirklich echt und ehrlich anfühlt.",
    },
    dj: {
      label: "DJ",
      title: "DJ Sergjio",
      sub: "Mein DJ-Set",
      intro:
        "Energiegeladene DJ-Sets, die das Publikum vom ersten Drop bis zum letzten Beat bewegen. Elektronischer Sound trifft kulturelle Einflüsse — House, Jungle, Cumbia und Club-Edits.",
      features: [
        { h: "Energiegeladene Sets", p: "Wirkungsvolle Übergänge und dynamische Drops." },
        { h: "Jungle & House", p: "Tief, liquid und hochenergetisch." },
        { h: "Electronic Fusion", p: "Kulturelle Elemente trifft Club-Sound." },
        { h: "Adaptives Format", p: "Clubs, Festivals und Hybrid-Live-Sets." },
        { h: "Schweiz-basiert", p: "Verfügbar für internationale Bookings." },
      ],
      galleryTitle: "Live",
      liveFeed: "Soundcloud · Live Feed",
      latestTitle: "Aktuelle Sets, Mixes & Releases",
      openSoundcloud: "Auf Soundcloud öffnen ↗",
      playSoundcloud: "Soundcloud-Player abspielen",
    },
    tour: {
      label: "#sergjioontour",
      title: "Termine",
      upcomingTitle: "Kommende Shows",
      pastTitle: "Vergangene Shows",
      stats: [
        { v: "{count}+", l: "Kommende Shows" },
        { v: "5", l: "Live-Instrumente" },
        { v: "5", l: "Event-Formate" },
        { v: "100%", l: "Live-Performance" },
      ],
    },
    releases: {
      label: "Diskografie",
      title: "Releases",
      streamOn: "Streamen auf",
      listenNow: "Jetzt anhören",
    },
    booking: {
      label: "Booking",
      title: "Live & Kollab",
      sub: "Für Presse, Veranstalter, Kollaborationen",
      direct: "Direktkontakt",
      formTitle: "Nachricht senden",
      fields: { name: "Name *", email: "E-Mail *", phone: "Telefon", category: "Booking-Kategorie *", message: "Nachricht *" },
      categories: ["Live-Auftritt", "DJ-Set", "Festival", "Privat-Event", "Presse / Medien", "Kollaboration"],
      sendEmail: "E-Mail senden",
      sendWa: "Per WhatsApp senden",
    },
    epk: {
      label: "Electronic Press Kit",
      title: "EPK",
      tagline: "Live Multiinstrumentalist & DJ (COL/CH)",
      intro: BIO.de.origin,
      open: "EPK öffnen",
      bioTitle: "Bio",
      videosTitle: "Videos",
      photosTitle: "Pressefotos",
      photosNote: "Web-Auflösung · Originale in voller Auflösung auf Anfrage",
      download: "Download",
      referencesTitle: "Referenzen",
      riderTitle: "Technical Rider",
      riderText: "Der Technical Rider ist auf Anfrage erhältlich.",
      riderButton: "Rider anfragen",
      contactTitle: "Booking-Kontakt",
      whatsapp: "WhatsApp",
      profiles: {
        live: {
          title: "Live-EPK",
          sub: "Cornet · Saz (Bağlama)",
          teaser: "Live-Auftritte mit Cornet und Saz (Bağlama).",
          bio: [BIO.de.origin, BIO.de.band, BIO.de.fusion, BIO.de.style, BIO.de.closing],
        },
        dj: {
          title: "DJ-EPK",
          sub: "DJ-Sets · Digital & Vinyl",
          teaser: "DJ-Sets mit Live-Instrumenten — digital oder auf Vinyl.",
          bio: [BIO.de.origin, BIO.de.electronic, BIO.de.fusion, BIO.de.style, BIO.de.vinyl, BIO.de.closing],
        },
      },
    },
    footer: {
      listenOn: "Hören auf",
      followOn: "Folgen auf",
      description: "Live-Mikrotonal-Instrumente in elektronischer Musik. Schweiz-basiert, weltweit verfügbar.",
    },
    whatsapp: {
      eventInquiry: (title, date, venue) =>
        `Ciao Sergjio, ich interessiere mich für den Event "${title}" am ${date} im ${venue}. Hast du einen Ticket-Link oder mehr Infos für mich?`,
      eventPastInquiry: (title, date, venue) =>
        `Ciao Sergjio, ich habe eine Frage zu deinem Auftritt "${title}" am ${date} im ${venue}. Gibt es dazu Fotos, Aufnahmen oder mehr Infos?`,
      bookingInquiry: (category, name, msg) =>
        `Ciao Sergjio, Booking-Anfrage (${category}) von ${name || "..."}: ${msg || "..."}`,
      epkInquiry: (profile) =>
        `Ciao Sergjio, ich habe dein ${profile} gesehen und möchte dich für einen Auftritt anfragen.`,
    },
  },

  en: {
    nav: { story: "Story", dj: "DJ Sets", music: "Music", tour: "Live Shows", epk: "EPK", booking: "Booking" },
    common: {
      available: "Available worldwide",
      listen: "Listen",
      follow: "Follow",
      listenOn: "Listen to Sergjio on",
      streamOn: "Stream on",
      bookSergjio: "Book Sergjio",
      bookDj: "Book DJ Sergjio",
      seeAll: "View all",
      seeAllShows: "See all shows",
      moreInfos: "More info",
      tickets: "Tickets via WhatsApp",
      upcoming: "Upcoming",
      past: "Past",
      noUpcoming: "No upcoming shows announced.",
      available_for: "Available for",
      based_in: "Based in",
      travels: "Travels",
      festivalsClubsPrivate: "Festivals · Clubs · Private events",
      switzerland: "Switzerland",
      international: "Internationally",
      watch: "Watch",
      aboutSergjio: "About Sergjio",
      djSergjio: "DJ Sergjio",
      skipToContent: "Skip to content",
      menu: "Open menu",
      closeMenu: "Close menu",
    },
    home: {
      location: "Switzerland · Available worldwide",
      title: "Sergjio Music",
      tagline: "Live microtonal instruments inside electronic music",
      tourLabel: "#sergjioontour",
      upcomingShows: "Upcoming Shows",
      aboutTitle: "Sergjio Music",
      aboutP1:
        "Sergjio's sound is defined by the character of live instruments including the Azeri Tar, Uzun Saz Bağlama, and Soprano Cornet, forming warm and emotional soundscapes that invite deep listening.",
      aboutP2:
        "Rooted in classical training and shaped by cultural sound traditions, his performances explore the space between organic expression and contemporary electronic music — House, Cumbia, Club.",
      youtubeTitle: "Check Out On YouTube",
      ctaTitle: "Music that lives in the moment",
      ctaSub:
        "Sergjio performs with expressive live instruments, each performance shaped by the space, the audience, and the emotion of the moment.",
      ctaBtn: "Booking & Inquiries",
    },
    about: {
      label: "About",
      title: "About Sergjio Music",
      storyTitle: "My Story",
      p1: "Sergjio is a musician and live performer whose work centers around acoustic and microtonal instruments. Rooted in classical training and shaped by cultural sound traditions, his performances explore the space between organic expression and contemporary sound.",
      p2: "Each instrumental performance is built live, with instruments as the central element rather than an addition, creating moments that feel intimate, human, and deeply connected to the present.",
      p3: "Alongside his instrumental work, Sergjio also performs DJ sets that explore electronic music in a separate context. Rather than standing in the spotlight, Sergjio lets the music lead. His presence remains subtle — sound, atmosphere, and emotion guide the experience.",
      spaces: "Cultural spaces · Festivals · Underground venues · Refined private events.",
      features: [
        { h: "Live Instrumental Performance", p: "Microtonal instruments in immersive live expression." },
        { h: "Emotion Driven Performance", p: "Intimate, atmospheric and powerful." },
        { h: "Traditional Instruments", p: "Azeri Tar, Saz, Bağlama & Soprano Cornet." },
      ],
      instrumentsTitle: "Sergjio's Instruments",
      quote:
        "Every stage is a reset — nothing held back. I give the crowd the rawest version of me every single time, because that's the only way it feels truly real and authentic.",
    },
    dj: {
      label: "DJ",
      title: "DJ Sergjio",
      sub: "My DJ Set",
      intro:
        "High-energy DJ sets that move the crowd from the first drop to the last beat. Blending electronic sound with cultural influence — House, Jungle, Cumbia and club edits.",
      features: [
        { h: "Energy Driven Sets", p: "High-impact transitions and dynamic drops." },
        { h: "Jungle & House", p: "Deep, liquid and high-energy rhythms." },
        { h: "Electronic Fusion", p: "Blending cultural elements with club sound." },
        { h: "Adaptive Format", p: "Clubs, festivals and hybrid live sets." },
        { h: "Switzerland Based", p: "Available for international bookings." },
      ],
      galleryTitle: "Live",
      liveFeed: "Soundcloud · Live Feed",
      latestTitle: "Latest Sets, Mixes & Releases",
      openSoundcloud: "Open on Soundcloud ↗",
      playSoundcloud: "Play Soundcloud player",
    },
    tour: {
      label: "#sergjioontour",
      title: "Tour",
      upcomingTitle: "Upcoming",
      pastTitle: "Past Shows",
      stats: [
        { v: "{count}+", l: "Upcoming Shows" },
        { v: "5", l: "Live Instruments" },
        { v: "5", l: "Event Formats" },
        { v: "100%", l: "Live Performance" },
      ],
    },
    releases: {
      label: "Discography",
      title: "Releases",
      streamOn: "Stream on",
      listenNow: "Listen Now",
    },
    booking: {
      label: "Booking",
      title: "Live & Collab",
      sub: "For Press, Organizers, Collaborations",
      direct: "Direct Contact",
      formTitle: "Send a Message",
      fields: { name: "Name *", email: "Email *", phone: "Phone", category: "Booking Category *", message: "Message *" },
      categories: ["Live Performance", "DJ Set", "Festival", "Private Event", "Press / Media", "Collaboration"],
      sendEmail: "Send Email",
      sendWa: "Send via WhatsApp",
    },
    epk: {
      label: "Electronic Press Kit",
      title: "EPK",
      tagline: "Live Multi-Instrumentalist & DJ (COL/CH)",
      intro: BIO.en.origin,
      open: "Open EPK",
      bioTitle: "Bio",
      videosTitle: "Videos",
      photosTitle: "Press Photos",
      photosNote: "Web resolution · Full-resolution originals on request",
      download: "Download",
      referencesTitle: "References",
      riderTitle: "Technical Rider",
      riderText: "The technical rider is available on request.",
      riderButton: "Request rider",
      contactTitle: "Booking Contact",
      whatsapp: "WhatsApp",
      profiles: {
        live: {
          title: "Live EPK",
          sub: "Cornet · Saz (Bağlama)",
          teaser: "Live performances with cornet and saz (bağlama).",
          bio: [BIO.en.origin, BIO.en.band, BIO.en.fusion, BIO.en.style, BIO.en.closing],
        },
        dj: {
          title: "DJ EPK",
          sub: "DJ Sets · Digital & Vinyl",
          teaser: "DJ sets with live instruments — digital or on vinyl.",
          bio: [BIO.en.origin, BIO.en.electronic, BIO.en.fusion, BIO.en.style, BIO.en.vinyl, BIO.en.closing],
        },
      },
    },
    footer: {
      listenOn: "Listen on",
      followOn: "Follow on",
      description: "Live microtonal instruments inside electronic music. Switzerland-based, available worldwide.",
    },
    whatsapp: {
      eventInquiry: (title, date, venue) =>
        `Hi Sergjio, I'm interested in your event "${title}" on ${date} at ${venue}. Do you have a ticket link or more info for me?`,
      eventPastInquiry: (title, date, venue) =>
        `Hi Sergjio, I have a question about your show "${title}" on ${date} at ${venue}. Are there any photos, recordings or more info?`,
      bookingInquiry: (category, name, msg) =>
        `Hi Sergjio, booking inquiry (${category}) from ${name || "..."}: ${msg || "..."}`,
      epkInquiry: (profile) =>
        `Hi Sergjio, I've seen your ${profile} and would like to book you for a show.`,
    },
  },
};

export const t = (locale: Locale) => DICT[locale];

export const NAV_KEYS = [
  { key: "story", href: "/about" },
  { key: "dj", href: "/dj" },
  { key: "music", href: "/releases" },
  { key: "tour", href: "/tour" },
  { key: "epk", href: "/epk" },
  { key: "booking", href: "/booking" },
] as const;

export const localizedHref = (locale: Locale, href: string) => `/${locale}${href === "/" ? "" : href}`;
