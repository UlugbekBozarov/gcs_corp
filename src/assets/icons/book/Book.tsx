import React, { memo } from "react";

const Work = ({ width = "24", height = "24", color = "#1C274C" }) => {
  return (
    <svg
      fill="#000000"
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      id="work-agenda"
      data-name="Flat Color"
      xmlns="http://www.w3.org/2000/svg"
      className="icon flat-color"
    >
      <rect
        id="primary"
        x="4"
        y="2"
        width="18"
        height="20"
        rx="2"
        fill={color}
        opacity="0.4"
        // style="fill: rgb(0, 0, 0);"
      ></rect>
      <path
        id="secondary"
        d="M5,9H3A1,1,0,0,1,3,7H5A1,1,0,0,1,5,9Zm1,3a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H5A1,1,0,0,0,6,12Zm0,4a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H5A1,1,0,0,0,6,16ZM20,2H18V22h2a2,2,0,0,0,2-2V4A2,2,0,0,0,20,2Z"
        fill={color}
        // style="fill: rgb(44, 169, 188);"
      ></path>
    </svg>
  );
};

export default memo(Work);
