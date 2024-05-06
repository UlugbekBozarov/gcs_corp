import { memo } from "react";

const AddList = ({ width = "24", height = "24", color = "#1C274C" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 19V11M3 11H13M3 7H13M3 15H9M13 15H21"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default memo(AddList);
