import React from "react";
import styled from "styled-components";

interface CircleProgressBarProps {
  progress: number;
}

const Wapper = styled.div`
  .circle-svg {
    --offset: 0;
    transition: --offset 0.3s ease-in-out;
  }
`;

const CircleProgressBar: React.FC<CircleProgressBarProps> = ({ progress }) => {
  const radius = 50.6541;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg
      width="136"
      height="136"
      viewBox="0 0 106 106"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter
          id="filter0_b_8337_1529"
          x="-3.98578"
          y="-3.98578"
          width="113.972"
          height="113.972"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="2.30246" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_8337_1529"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_8337_1529"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_8337_1529"
          x1="0%"
          y1="50%"
          x2="100%"
          y2="50%"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#0093fe" />
          <stop offset="100%" stopColor="#50ffd5" />
        </linearGradient>
      </defs>
      <g filter="url(#filter0_b_8337_1529)">
        <circle
          cx="53.0001"
          cy="53.0001"
          r={radius}
          fill="none"
          stroke="url(#paint0_linear_8337_1529)"
          strokeWidth="1"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{
            transition: "stroke-dashoffset 0.3s ease-in-out",
            transform: "rotate(270deg)",
            transformOrigin: "center",
          }}
        ></circle>
      </g>
    </svg>
  );
};

export default CircleProgressBar;
