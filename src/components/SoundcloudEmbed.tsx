"use client";

import { useState } from "react";

type Props = {
  handle: string;
  posterSrc: string;
  posterAlt: string;
  ctaLabel: string;
};

export default function SoundcloudEmbed({ handle, posterSrc, posterAlt, ctaLabel }: Props) {
  const [active, setActive] = useState(false);
  const src = `https://w.soundcloud.com/player/?url=https%3A%2F%2Fsoundcloud.com%2F${handle}&color=%23ff6a1f&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`;

  return (
    <div className="tile relative w-full overflow-hidden" style={{ minHeight: 480 }}>
      {!active ? (
        <button
          type="button"
          onClick={() => setActive(true)}
          aria-label={ctaLabel}
          className="group relative block w-full p-0 m-0 border-0 bg-transparent cursor-pointer"
          style={{ aspectRatio: "16 / 9", minHeight: 480 }}
        >
          <img
            src={posterSrc}
            alt={posterAlt}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
            loading="lazy"
          />
          <span className="absolute inset-0 flex items-center justify-center bg-ink/55 group-hover:bg-ink/40 transition-colors">
            <span className="flex flex-col items-center gap-4 px-6 text-center">
              <span className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#ff6a1f] group-hover:scale-105 transition-transform">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              <span className="uppercase-brand text-sm sm:text-base text-white">{ctaLabel}</span>
            </span>
          </span>
        </button>
      ) : (
        <iframe
          width="100%"
          height="650"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src={src}
          className="block w-full"
          title="Soundcloud player"
        />
      )}
    </div>
  );
}
