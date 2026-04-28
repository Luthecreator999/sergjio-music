/**
 * Sergjio's official YouTube uploads. Only HIS own content goes here —
 * the channel feed sometimes mixes in suggested or shared videos which
 * we deliberately exclude.
 *
 * To add a new video:
 *   - Open the YouTube URL of the video Sergjio uploaded
 *   - Copy the videoId after `v=` (e.g. https://youtube.com/watch?v=ABC123 → "ABC123")
 *   - Add an entry below with a short, descriptive title
 */
export type YoutubeVideo = {
  id: string;
  title: string;
};

export const YOUTUBE_VIDEOS: YoutubeVideo[] = [
  { id: "fE3qrk9-w7A", title: "Soprano Cornet Improvisation" },
  { id: "MjVPZ9cRDQo", title: "Elektro Bağlama — Topraktan Beden" },
  { id: "7KwuVmv0ssg", title: "Switzerland National Anthem" },
];

export const ytThumbnail = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
export const ytEmbed = (id: string) => `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
export const ytWatch = (id: string) => `https://www.youtube.com/watch?v=${id}`;
