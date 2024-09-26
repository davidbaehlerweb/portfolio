import React from 'react';

const Logo = () => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100" height="100" fill="black" />
      <text
        x="50"
        y="65"
        fill="white"
        fontFamily="Arial, sans-serif"
        fontSize="60"
        fontWeight="bold"
        textAnchor="middle"
      >
        DB
      </text>
    </svg>
  );
};

export default Logo;
