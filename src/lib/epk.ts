import type { EventKind } from "./events";
import { VIDEOS, type VideoAsset } from "./media";
import { PHOTOS, type Photo } from "./photos";
import type { PageKey } from "./seo";
import { YOUTUBE_VIDEOS, type YoutubeVideo } from "./youtube";

/**
 * Media registry for the two press kits (Live-EPK / DJ-EPK). The texts live in
 * i18n.ts (`epk`), the references come from events.ts (`kinds`), the photos
 * and their titles from photos.ts — this file only decides which photos and
 * videos each kit shows.
 *
 * To swap or add a press photo: add it to photos.ts, then put it into the
 * `photos` list of the kit below. Keep the count a multiple of three so the
 * desktop grid stays full; with an odd count the last photo spans the full
 * width on phones, so put a landscape photo last.
 * Self-hosted videos are registered in media.ts first, YouTube uploads in
 * youtube.ts, then referenced here.
 */
export const EPK_KINDS = ["live", "dj"] as const satisfies readonly EventKind[];

export type EpkProfile = {
  /** Page key in seo.ts — gives the route and the metadata. */
  page: PageKey;
  hero: { photo: Photo; position: string };
  /** Image next to the bio. */
  portrait: { photo: Photo; position: string };
  photos: Photo[];
  videos: VideoAsset[];
  youtube: YoutubeVideo[];
};

export const EPK: Record<EventKind, EpkProfile> = {
  live: {
    page: "epkLive",
    hero: { photo: PHOTOS.sazDjSetWide, position: "center 20%" },
    portrait: { photo: PHOTOS.cornetStage, position: "62% 30%" },
    photos: [
      PHOTOS.cornetDjSet,
      PHOTOS.sazDjSet,
      PHOTOS.cornetDjSetSide,
      PHOTOS.sazDjSetSide,
      PHOTOS.cornetTurntable,
      PHOTOS.cornetStage,
      PHOTOS.stageBack,
      PHOTOS.sazDetail,
      PHOTOS.sazStage,
    ],
    videos: [],
    youtube: YOUTUBE_VIDEOS,
  },
  dj: {
    page: "epkDj",
    hero: { photo: PHOTOS.djMixing, position: "center 24%" },
    portrait: { photo: PHOTOS.djProfile, position: "55% 20%" },
    photos: [
      PHOTOS.vinylRecord,
      PHOTOS.vinylTurntable,
      PHOTOS.vinylMixer,
      PHOTOS.cornetTurntable,
      PHOTOS.djFront,
      PHOTOS.djMixing,
      PHOTOS.djLaughing,
      PHOTOS.djProfile,
      PHOTOS.djSide,
      PHOTOS.djJogWheel,
      PHOTOS.djMixerDetail,
      PHOTOS.djController,
    ],
    videos: [VIDEOS.djPortfolio],
    youtube: [],
  },
};
