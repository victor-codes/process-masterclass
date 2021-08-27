import React from "react";

export const Menu = () => {
  return (
    <div style={{marginRight: "20px"}}>
      <svg
        width="21"
        height="12"
        viewBox="0 0 21 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="21"
          height="2"
          rx="1"
          transform="matrix(1 0 0 -1 0 2)"
          fill="black"
        />
        <rect
          width="21"
          height="2"
          rx="1"
          transform="matrix(1 0 0 -1 0 7)"
          fill="black"
        />
        <rect
          width="21"
          height="2"
          rx="1"
          transform="matrix(1 0 0 -1 0 12)"
          fill="black"
        />
      </svg>
    </div>
  );
};
