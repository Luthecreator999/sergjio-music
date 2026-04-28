export const SITE = {
  name: "Sergjio Music",
  tagline: "Live microtonal instruments inside electronic music",
  email: "ramonsergjio@gmail.com",
  phone: "+41 79 966 21 77",
  phoneIntl: "41799662177",
  location: "Switzerland",
  designer: { name: "@jadimedia", url: "https://www.jadimedia.ch" },
  social: {
    instagram: { handle: "@s.e.r.g.j.i.o", url: "https://www.instagram.com/s.e.r.g.j.i.o/" },
    tiktok: { handle: "@sergjiomusic", url: "https://www.tiktok.com/@sergjiomusic" },
    youtube: { handle: "@sergjio9931", url: "https://www.youtube.com/@sergjio9931" },
  },
  streaming: {
    soundcloud: {
      label: "Soundcloud",
      url: "https://soundcloud.com/user-808920730",
      handle: "user-808920730",
    },
    youtube: { label: "YouTube", url: "https://www.youtube.com/@sergjio9931" },
  },
} as const;

export const NAV = [
  { label: "Story", href: "/about" },
  { label: "DJ Sets", href: "/dj" },
  { label: "Musik", href: "/releases" },
  { label: "Live Termine", href: "/tour" },
  { label: "Booking", href: "/booking" },
] as const;
