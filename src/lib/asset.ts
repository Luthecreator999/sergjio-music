/**
 * Prefix any static-asset path (images, videos, PDFs) with the configured
 * basePath so static exports work under sub-paths like
 * https://username.github.io/sergjio-music/.
 *
 * Usage:
 *   <Image src={asset("/images/foo.jpg")} ... />
 *   <a href={asset("/press/kit.pdf")}>...</a>
 */
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  if (!path.startsWith("/")) return path;
  if (!BASE_PATH) return path;
  return `${BASE_PATH}${path}`;
}
