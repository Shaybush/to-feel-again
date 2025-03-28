import React from "react";

export function PlayButton({ playColor = "#ffffff", bgColor = "#422c20" }) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="68"
        height="48"
        viewBox="0 0 68 48"
      >
        <path
          d="M66.52 7.03a8.27 8.27 0 0 0-5.82-5.83C56.44 0 34 0 34 0S11.56 0 7.3 1.2a8.27 8.27 0 0 0-5.82 5.83A85.2 85.2 0 0 0 0 24a85.2 85.2 0 0 0 1.48 16.97 8.27 8.27 0 0 0 5.82 5.83C11.56 48 34 48 34 48s22.44 0 26.7-1.2a8.27 8.27 0 0 0 5.82-5.83A85.2 85.2 0 0 0 68 24a85.2 85.2 0 0 0-1.48-16.97Z"
          fill={bgColor}
        />
        <path d="M45 24 27 14v20z" fill={playColor} />
      </svg>
    </div>
  );
}
