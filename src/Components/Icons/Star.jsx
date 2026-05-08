import React from "react";

const Star = ({ width = 14, height = 13, className = "", fill = "gold" }) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 14 13"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.65723 0L8.50875 4.4516L13.3146 4.83688L9.65305 7.9734L10.7717 12.6631L6.65723 10.15L2.54273 12.6631L3.6614 7.9734L-0.000169277 4.83688L4.8057 4.4516L6.65723 0Z"
        fill="#FFA432"
      />
    </svg>
  );
};

export default Star;
