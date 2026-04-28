/**
 * YouTube video registry. Add or remove videos here — they are rendered
 * as click-to-play tiles on the home page.
 *
 * Get a videoId from any YouTube URL:
 *   https://youtube.com/watch?v=fE3qrk9-w7A → "fE3qrk9-w7A"
 *   https://youtu.be/MjVPZ9cRDQo            → "MjVPZ9cRDQo"
 */
export type YoutubeVideo = {
  id: string;
  title: string;
};

export const YOUTUBE_VIDEOS: YoutubeVideo[] = [
  { id: "fE3qrk9-w7A", title: "Soprano Cornet Improvisation" },
  { id: "MjVPZ9cRDQo", title: "Elektro Bağlama — Topraktan Beden" },
  { id: "7KwuVmv0ssg", title: "Switzerland National Anthem" },
  { id: "RFKu1GMtObo", title: "Nocas mi se s tobom spava" },
  { id: "yzjQ-ue6txQ", title: "İnanmam (Instrumental)" },
  { id: "JABqThjQF2U", title: "Curacao" },
];

export const ytThumbnail = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
export const ytEmbed = (id: string) => `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
export const ytWatch = (id: string) => `https://www.youtube.com/watch?v=${id}`;
