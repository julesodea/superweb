export const DottedPattern = () => {
  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden`}>
      <svg
        className="absolute top-1/2 left-1/2 h-[200%] w-[200%] -translate-x-1/2 -translate-y-1/2"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <pattern
          id="dotPattern"
          x="50%"
          y="50%"
          width="10"
          height="10"
          patternUnits="userSpaceOnUse"
          patternTransform="translate(-5,-5)"
        >
          <circle cx="2" cy="2" r="0.5" className="fill-white opacity-10" />
        </pattern>
        <rect x="0" y="0" width="100" height="100" fill="url(#dotPattern)" />
      </svg>
    </div>
  );
};
