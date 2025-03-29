"use client";

import { PlayButton } from "@/app/tofeelagain/PlayButton";
import { cn } from "@/lib/utils";
import { useState } from "react";

type Props = {
  videoId: string;
  title: string;
  aspectRatio?: string;
};

export default function LazyYouTube({
  videoId,
  title,
  aspectRatio = "16/9",
}: Props) {
  const [isIframeLoaded, setIframeLoaded] = useState(false);

  const thumbnail = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&rel=0&modestbranding=1&playsinline=1`;

  if (!thumbnail?.length) return <div>loading...</div>;

  return (
    <div
      className="relative cursor-pointer overflow-hidden rounded-2xl shadow-lg"
      style={{
        aspectRatio,
        backgroundImage: `url(${thumbnail})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onClick={() => setIframeLoaded(true)}
    >
      {!isIframeLoaded && (
        <div
          className={cn(
            `absolute inset-0 bg-opacity-40 flex items-center justify-center`
          )}
        >
          <PlayButton />
        </div>
      )}

      {isIframeLoaded && (
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      )}
    </div>
  );
}
