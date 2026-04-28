"use client";

import { useState } from "react";
import { ytThumbnail, ytEmbed, type YoutubeVideo } from "@/lib/youtube";

/**
 * Click-to-play YouTube embed: shows the YouTube thumbnail until the user
 * hits play, then swaps to the privacy-mode iframe so we don't load
 * youtube.com on every page view.
 */
export default function YouTubeEmbed({ video }: { video: YoutubeVideo }) {
  const [active, setActive] = useState(false);

  return (
    <div className="tile relative aspect-video group overflow-hidden">
      {!active ? (
        <button
          type="button"
          onClick={() => setActive(true)}
          className="absolute inset-0 w-full h-full p-0 m-0 border-0 bg-transparent cursor-pointer"
          aria-label={`Play: ${video.title}`}
        >
          <img
            src={ytThumbnail(video.id)}
            alt={video.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <span className="absolute inset-0 flex items-center justify-center bg-ink/30 group-hover:bg-ink/15 transition-colors">
            <span className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/95 group-hover:bg-white transition-colors">
              <svg width="22" height="26" viewBox="0 0 22 26" fill="none" className="ml-1">
                <path d="M22 13L0 26V0L22 13Z" fill="#000" />
              </svg>
            </span>
          </span>
          <span className="absolute bottom-0 inset-x-0 p-4 sm:p-5 bg-gradient-to-t from-ink/90 via-ink/50 to-transparent">
            <span className="uppercase-brand text-xs sm:text-sm text-white block truncate">
              {video.title}
            </span>
          </span>
        </button>
      ) : (
        <iframe
          src={ytEmbed(video.id)}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full border-0"
        />
      )}
    </div>
  );
}
