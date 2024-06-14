const Icon = (props: any) => {
  return (
    <svg {...props} width="472" height="280" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#0093fe", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#50ffd5", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
      <rect
        x="1"
        y="1"
        rx="20"
        ry="20"
        width="470"
        height="278"
        style={{ fill: "none", stroke: "url(#grad1)", strokeWidth: 0.5 }}
      />
    </svg>
  );
};

export default Icon;
