import { useRef } from "react";
import { useInView } from "motion/react";

const ChecklistIllustration = () => (
  <div className="relative group/cards mt-6 self-center">
    {/* Background card */}
    <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-lg border border-gray-100 bg-white/60 transition-transform duration-300 group-hover/cards:translate-x-5 group-hover/cards:translate-y-5" />
    {/* Foreground card */}
    <div className="relative max-w-[260px] rounded-lg border border-gray-100 bg-white p-5 shadow-sm transition-transform duration-300 group-hover/cards:-translate-x-1 group-hover/cards:-translate-y-1">
      <div className="flex items-center gap-2 mb-1">
        <div className="w-3 h-3 rounded-full bg-gray-200" />
        <div className="h-2 w-16 bg-gray-100 rounded" />
        <div className="ml-auto h-6 w-14 bg-gray-100 rounded-md" />
      </div>
      <h4 className="text-sm font-semibold text-gray-800 mt-3">
        Launch checklist
      </h4>
      <p className="text-[10px] text-gray-400 mb-3">
        Product marketing sprint
      </p>
      {[
        "Audience and offer review",
        "Core page design",
        "Message hierarchy",
        "Conversion QA",
        "Performance tracking",
        "Post-launch fixes",
      ].map((item, i) => (
        <div
          key={i}
          className={`flex items-center gap-2.5 py-1.5 ${i >= 4 ? "opacity-40" : ""}`}
        >
          <div className="w-5 h-5 rounded-md bg-[#e8bd3f] flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover/cards:bg-amber-100">
            <svg
              className="w-3 h-3 text-[#101113] transition-colors duration-300 group-hover/cards:text-amber-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <span className="text-xs text-gray-500">{item}</span>
        </div>
      ))}
    </div>
  </div>
);

const StepPillsIllustration = () => (
  <div className="flex flex-col gap-0.5 w-full">
    {["Planning", "Launch", "Support"].map((label, i) => (
      <div
        key={label}
        className="bg-white rounded-full py-2 shadow-sm border border-gray-100 text-sm font-medium text-gray-800 text-center transition-colors duration-300 hover:bg-amber-300 hover:border-amber-200"
        style={{ width: "33.33%", marginLeft: `${i * 33.33}%` }}
      >
        {label}
      </div>
    ))}
  </div>
);

const DonutChartIllustration = () => {
  const ref = useRef<SVGCircleElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const circumference = 2 * Math.PI * 80;
  const score = 0.92;

  return (
    <div className="relative w-[132px] h-[132px] mx-auto">
      <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90">
        <circle
          cx="100"
          cy="100"
          r="80"
          fill="none"
          stroke="#e5e5e5"
          strokeWidth="24"
        />
        <circle
          ref={ref}
          cx="100"
          cy="100"
          r="80"
          fill="none"
          stroke="#FCD34D"
          strokeWidth="24"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeLinecap="round"
          style={{
            strokeDashoffset: isInView ? circumference * (1 - score) : circumference,
            transition: "stroke-dashoffset 1.5s ease-out",
          }}
        />
      </svg>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <span className="text-4xl font-black tabular-nums text-[#e8bd3f]">92%</span>
      </div>
    </div>
  );
};

const BarChartIllustration = () => {
  const months = ["Aug", "Sep", "Oct", "Nov"];
  const bars = [70, 100, 55, 110];

  return (
    <div className="mt-auto flex justify-center">
      <div className="w-full max-w-[280px] rounded-lg border border-gray-100 bg-white p-5 shadow-sm">
        <div
          className="flex items-end justify-center gap-5 mb-3"
          style={{ height: 120 }}
        >
          {bars.map((h, i) => (
            <div
              key={i}
              className="w-8 bg-amber-300 rounded-lg flex-shrink-0"
              style={{ height: h }}
            />
          ))}
        </div>
        <div className="flex justify-center gap-5">
          {months.map((m) => (
            <span key={m} className="text-[11px] text-gray-400 w-8 text-center">
              {m}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export const BentoGrid = ({ isDarkMode = false }: { isDarkMode?: boolean }) => {
  const cardClass = isDarkMode
    ? "border border-white/8 bg-white/[0.04]"
    : "border border-[#101113]/8 bg-white/55";
  const headingClass = isDarkMode ? "text-[#f6f3ec]" : "text-[#101113]";
  const bodyClass = isDarkMode ? "text-[#f6f3ec]/58" : "text-[#101113]/62";

  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-3xl">
          <h2 className={`text-balance text-4xl font-black leading-none md:text-6xl ${headingClass}`}>
            A launch system, not a pile of screens.
          </h2>
        </div>

        <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-5">
          <div className={`flex min-h-[420px] flex-col gap-6 overflow-hidden rounded-xl p-8 md:col-span-3 md:flex-row md:items-start ${cardClass}`}>
            <div className="flex-shrink-0 md:max-w-[280px]">
              <h3 className={`mb-3 text-2xl font-black ${headingClass}`}>
                Strategy before screens
              </h3>
              <p className={`text-sm leading-7 ${bodyClass}`}>
                We define the audience, offer, and conversion path before
                opening a design file.
              </p>
            </div>
            <ChecklistIllustration />
          </div>

          <div className={`flex min-h-[420px] flex-col overflow-hidden rounded-xl p-8 md:col-span-2 ${cardClass}`}>
            <div>
              <h3 className={`mb-3 text-2xl font-black ${headingClass}`}>
                Measured after launch
              </h3>
              <p className={`text-sm leading-7 ${bodyClass}`}>
                We wire tracking and QA into the build so the team can see what
                changed.
              </p>
            </div>
            <BarChartIllustration />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className={`flex min-h-[340px] flex-col overflow-hidden rounded-xl p-6 ${cardClass}`}>
            <div>
              <h3 className={`mb-2 text-2xl font-black ${headingClass}`}>
                Conversion path review
              </h3>
              <p className={`text-sm leading-7 ${bodyClass}`}>
                Every section has a job: qualify, explain, prove, or move the
                visitor forward.
              </p>
            </div>
            <div className="flex-1 flex items-center">
              <DonutChartIllustration />
            </div>
          </div>

          <div className={`flex min-h-[340px] flex-col overflow-hidden rounded-xl p-6 ${cardClass}`}>
            <div>
              <h3 className={`mb-2 text-2xl font-black ${headingClass}`}>
                Build support through handoff
              </h3>
              <p className={`text-sm leading-7 ${bodyClass}`}>
                Planning, build, QA, deployment, and post-launch fixes stay in
                one tight loop.
              </p>
            </div>
            <div className="flex-1 flex items-center">
              <StepPillsIllustration />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
