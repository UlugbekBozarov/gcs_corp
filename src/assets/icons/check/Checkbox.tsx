import { useTheme } from "@mui/material";
import { get } from "lodash";
import React, { memo } from "react";

const Checkbox = ({ width = "20", height = "20" }) => {
  const { palette } = useTheme();

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.85"
        y="0.85"
        width="18.3"
        height="18.3"
        rx="4.15"
        stroke={get(palette, "text.secondary")}
        strokeWidth="1.7"
      />
    </svg>
  );
};

export default memo(Checkbox);
