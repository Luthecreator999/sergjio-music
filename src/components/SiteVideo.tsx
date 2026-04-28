import Image from "next/image";

type Props = {
  src: string;
  width: number;
  height: number;
  poster?: string;
  className?: string;
};

/**
 * Renders a video at its native aspect ratio.
 * The wrapper enforces the source's aspect so layout never shifts and the
 * video is never cropped — it stays in the format it was uploaded in.
 */
export default function SiteVideo({ src, width, height, poster, className = "" }: Props) {
  const aspect = `${width} / ${height}`;
  const isPortrait = height > width;

  return (
    <div
      className={`tile-quiet overflow-hidden mx-auto ${
        isPortrait ? "max-w-[420px]" : "w-full"
      } ${className}`}
      style={{ aspectRatio: aspect }}
    >
      <video
        src={src}
        poster={poster}
        controls
        playsInline
        preload="metadata"
        width={width}
        height={height}
        className="block w-full h-full object-contain bg-black"
      />
    </div>
  );
}

/**
 * Image asset hint — for future image uploads we want consistent handling.
 * (Re-exported for convenience so video pages can co-locate poster fallbacks.)
 */
export { Image };
