import type { EventKind } from "./events";
import { VIDEOS, type VideoAsset } from "./media";
import type { PageKey } from "./seo";
import { YOUTUBE_VIDEOS, type YoutubeVideo } from "./youtube";

/**
 * Media registry for the two press kits (Live-EPK / DJ-EPK). The texts live in
 * i18n.ts (`epk`), the references come from events.ts (`kinds`) — this file
 * only decides which photos and videos each kit shows.
 *
 * To swap or add a press photo:
 *   1. Drop the file into /public/images/ (full-resolution originals for
 *      download can go into /public/press/ and be referenced the same way)
 *   2. Edit the `photos` list of the kit below
 * Self-hosted videos are registered in media.ts first, YouTube uploads in
 * youtube.ts, then referenced here.
 */
export const EPK_KINDS = ["live", "dj"] as const satisfies readonly EventKind[];

export type PressPhoto = {
  src: string;
  alt: string;
  /** CSS object-position for the square gallery crop. Defaults to "center 25%". */
  position?: string;
};

export type EpkProfile = {
  /** Page key in seo.ts — gives the route and the metadata. */
  page: PageKey;
  hero: { image: string; alt: string; position: string };
  /** Image next to the bio. */
  portrait: { image: string; alt: string; position: string };
  photos: PressPhoto[];
  videos: VideoAsset[];
  youtube: YoutubeVideo[];
};

export const EPK: Record<EventKind, EpkProfile> = {
  live: {
    page: "epkLive",
    hero: {
      image: "/images/archive-live-2.jpg",
      alt: "Sergjio performing live with microtonal instruments",
      position: "70% 35%",
    },
    portrait: {
      image: "/images/archive-live-1.jpg",
      alt: "Sergjio playing the soprano cornet on stage",
      position: "62% 30%",
    },
    photos: [
      { src: "/images/archive-live-1.jpg", alt: "Sergjio playing the soprano cornet on stage" },
      { src: "/images/tour-hero.jpg", alt: "Sergjio at his live setup", position: "72% 40%" },
      { src: "/images/booking-portrait.jpg", alt: "Sergjio playing the electro saz on stage", position: "45% 50%" },
      { src: "/images/sergjio-cornet-hero.jpg", alt: "Sergjio on stage, seen from behind", position: "center 40%" },
      { src: "/images/about-portrait.jpg", alt: "Close-up of Sergjio's electro saz", position: "center" },
      { src: "/images/sergjio-saz-portrait.jpg", alt: "Sergjio's string instruments on stage", position: "center 55%" },
    ],
    videos: [],
    youtube: YOUTUBE_VIDEOS,
  },
  dj: {
    page: "epkDj",
    hero: {
      image: "/images/dj-live-6.jpg",
      alt: "DJ Sergjio at the decks",
      position: "center 24%",
    },
    portrait: {
      image: "/images/archive-dj-2.jpeg",
      alt: "DJ Sergjio during a set",
      position: "55% 20%",
    },
    photos: [
      { src: "/images/dj-live-5.jpg", alt: "DJ Sergjio at the decks, front view" },
      { src: "/images/dj-live-6.jpg", alt: "DJ Sergjio mixing" },
      { src: "/images/archive-dj-1.jpeg", alt: "DJ Sergjio laughing behind the decks", position: "60% 28%" },
      { src: "/images/archive-dj-2.jpeg", alt: "DJ Sergjio during a set", position: "55% 22%" },
      { src: "/images/dj-live-2.jpg", alt: "DJ Sergjio with headphones, side view", position: "40% 25%" },
      { src: "/images/dj-booth-hero.jpg", alt: "Sergjio's hand on the DJ controller", position: "center 75%" },
    ],
    videos: [VIDEOS.djPortfolio],
    youtube: [],
  },
};
