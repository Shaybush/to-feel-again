"use client";

import { useState } from "react";

type Props = {
  videoId: string;
  title: string;
  aspectRatio?: string; // e.g., "16/9"
};

export default function LazyYouTube({
  videoId,
  title,
  aspectRatio = "16/9",
}: Props) {
  const [isIframeLoaded, setIframeLoaded] = useState(false);

  const thumbnail = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&rel=0&modestbranding=1&playsinline=1`;

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
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="68"
            height="48"
            viewBox="0 0 68 48"
          >
            <path
              d="M66.52 7.03a8.27 8.27 0 0 0-5.82-5.83C56.44 0 34 0 34 0S11.56 0 7.3 1.2a8.27 8.27 0 0 0-5.82 5.83A85.2 85.2 0 0 0 0 24a85.2 85.2 0 0 0 1.48 16.97 8.27 8.27 0 0 0 5.82 5.83C11.56 48 34 48 34 48s22.44 0 26.7-1.2a8.27 8.27 0 0 0 5.82-5.83A85.2 85.2 0 0 0 68 24a85.2 85.2 0 0 0-1.48-16.97Z"
              fill="#422c20"
            />
            <path d="M45 24 27 14v20z" fill="#fff" />
          </svg>
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
