import { memo } from "react";

const Breadcrumb = ({ width = "24", height = "12" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 110 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_129_16)">
        <path
          d="M22.6551 0.390625H8.4894C3.9734 0.390625 0.3125 4.06333 0.3125 8.59383V41.406C0.3125 45.937 3.9734 49.609 8.4894 49.609H22.6551C24.0221 49.609 25.2986 48.924 26.0569 47.783L39.685 27.275C40.6006 25.897 40.6006 24.1026 39.685 22.7249L26.0569 2.21712C25.2986 1.07602 24.0221 0.390625 22.6551 0.390625Z"
          fill="#919EAB"
        />
        <path
          opacity="0.24"
          d="M93.622 0.390625H40.6598C39.152 0.390625 37.7666 1.22322 37.0551 2.55682C36.3436 3.89042 36.4216 5.50873 37.2579 6.76733L47.8622 22.7249C48.7778 24.1026 48.7778 25.897 47.8622 27.275L37.2579 43.233C36.4216 44.491 36.3436 46.11 37.0551 47.443C37.7666 48.777 39.152 49.609 40.6598 49.609H93.622C94.989 49.609 96.265 48.924 97.024 47.783L107.628 31.825C110.374 27.692 110.374 22.3077 107.628 18.1745L97.024 2.21712C96.265 1.07602 94.989 0.390625 93.622 0.390625Z"
          fill="#919EAB"
        />
      </g>
      <defs>
        <clipPath id="clip0_129_16">
          <rect width="110" height="50" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default memo(Breadcrumb);
