
export const ElipseIcon = (props) => {
  return (
    <svg
      width={279}
      height={279}
      viewBox="0 0 279 279"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_d_1_376)">
        <circle
          cx="139.5"
          cy="135.5"
          r="69.5"
          fill="url(#paint0_linear_1_376)"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1_376"
          x={0}
          y={0}
          width={279}
          height={279}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={35} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.607843 0 0 0 0 0.843137 0 0 0 0 0.764706 0 0 0 0.8 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_376"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_376"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1_376"
          x1="131.835"
          y1="91.0404"
          x2="139.5"
          y2={205}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6989D3" />
          <stop offset={1} stopColor="#5F36E0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ElipseIcon;
