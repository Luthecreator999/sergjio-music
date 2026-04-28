/**
 * Central video registry. Always store videos in their original format /
 * aspect ratio — never re-crop or force them into a different shape.
 *
 * When adding a new video:
 *   1. Drop the file into /public/videos/
 *   2. Run `mdls -name kMDItemPixelWidth -name kMDItemPixelHeight <file>`
 *      to get the native dimensions and add the entry below.
 *   3. The <SiteVideo /> component will render it at its native aspect.
 */

export type VideoAsset = {
  src: string;
  width: number;
  height: number;
  poster?: string;
  label?: string;
};

export const VIDEOS = {
  djPortfolio: {
    src: "/videos/sergjio-portfolio.mp4",
    width: 720,
    height: 1280, // Portrait 9:16
    poster: "/images/sergjio-thumbnail.jpg",
    label: "DJ Portfolio Reel",
  },
  liveLandscape: {
    src: "/videos/sergjio-live.mp4",
    width: 3840,
    height: 2160, // Landscape 16:9 4K
    label: "Live Performance",
  },
} as const satisfies Record<string, VideoAsset>;

export type VideoKey = keyof typeof VIDEOS;
