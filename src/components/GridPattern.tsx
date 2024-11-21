export const GridPattern = () => {
  return (
    <div className="absolute inset-0 z-[-1]">
      <svg
        className="absolute inset-0 h-full w-full rounded"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="rgba(0,0,0,0.05)"
              width="1"
            ></path>
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#grid)"></rect>
      </svg>
    </div>
  );
};
