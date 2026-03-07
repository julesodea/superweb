import { useRef } from "react";
import { useInView } from "framer-motion";

const ChecklistIllustration = () => (
  <div className="relative group/cards mt-6 self-center">
    {/* Background card */}
    <div className="absolute inset-0 translate-x-3 translate-y-3 bg-white/60 rounded-2xl border border-gray-100 transition-transform duration-300 group-hover/cards:translate-x-5 group-hover/cards:translate-y-5" />
    {/* Foreground card */}
    <div className="relative bg-white rounded-2xl shadow-sm border border-gray-100 p-5 max-w-[260px] transition-transform duration-300 group-hover/cards:-translate-x-1 group-hover/cards:-translate-y-1">
      <div className="flex items-center gap-2 mb-1">
        <div className="w-3 h-3 rounded-full bg-gray-200" />
        <div className="h-2 w-16 bg-gray-100 rounded" />
        <div className="ml-auto h-6 w-14 bg-gray-100 rounded-md" />
      </div>
      <h4 className="text-sm font-semibold text-gray-800 mt-3">Your incredible project</h4>
      <p className="text-[10px] text-gray-400 mb-3">Individual development strategy</p>
      {[
        "Business goal analysis",
        "Custom design development",
        "Brand identity refinement",
        "User experience optimization",
        "Performance tracking",
        "User experience optimization",
      ].map((item, i) => (
        <div key={i} className={`flex items-center gap-2.5 py-1.5 ${i >= 4 ? "opacity-40" : ""}`}>
          <div className="w-5 h-5 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover/cards:bg-amber-100">
            <svg className="w-3 h-3 text-amber-400 transition-colors duration-300 group-hover/cards:text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
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
        className="bg-white rounded-full py-2 shadow-sm border border-gray-100 text-sm font-medium text-gray-800 text-center transition-colors duration-300 hover:bg-amber-200 hover:border-amber-200"
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

  return (
    <div className="relative w-[132px] h-[132px] mx-auto">
      <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90">
        <circle cx="100" cy="100" r="80" fill="none" stroke="#e5e5e5" strokeWidth="24" />
        <circle
          ref={ref}
          cx="100"
          cy="100"
          r="80"
          fill="none"
          stroke="#fde68a"
          strokeWidth="24"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeLinecap="round"
          style={{
            strokeDashoffset: isInView ? 0 : circumference,
            transition: "stroke-dashoffset 1.5s ease-out",
          }}
        />
      </svg>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <span className="text-4xl font-bold text-amber-400">100%</span>
      </div>
    </div>
  );
};

const BarChartIllustration = () => {
  const months = ["Aug", "Sep", "Oct", "Nov"];
  const bars = [70, 100, 55, 110];

  return (
    <div className="mt-auto flex justify-center">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 w-full max-w-[280px]">
        <div className="flex items-end justify-center gap-5 mb-3" style={{ height: 120 }}>
          {bars.map((h, i) => (
            <div
              key={i}
              className="w-8 bg-amber-200 rounded-lg flex-shrink-0"
              style={{ height: h }}
            />
          ))}
        </div>
        <div className="flex justify-center gap-5">
          {months.map((m) => (
            <span key={m} className="text-[11px] text-gray-400 w-8 text-center">{m}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export const BentoGrid = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Top row: Strategies (landscape 3 cols) + Proven Success (portrait 2 cols) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
          {/* Tailored Strategies — landscape, 3 cols */}
          <div className="md:col-span-3 bg-neutral-100 rounded-3xl p-8 flex flex-col md:flex-row md:items-start gap-6 min-h-[420px] overflow-hidden">
            <div className="flex-shrink-0 md:max-w-[280px]">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Tailored Strategies</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                We customize every project to your specific business goals, ensuring solutions that fit your unique needs.
              </p>
            </div>
            <ChecklistIllustration />
          </div>

          {/* Proven Success — portrait, 2 cols */}
          <div className="md:col-span-2 bg-neutral-100 rounded-3xl p-8 flex flex-col min-h-[420px] overflow-hidden">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Proven Success</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                We've helped brands grow their digital presence and achieve measurable success. Let us help you do the same!
              </p>
            </div>
            <BarChartIllustration />
          </div>
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Results-Driven Approach */}
          <div className="bg-neutral-100 rounded-3xl p-6 flex flex-col min-h-[340px] overflow-hidden">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Results-Driven Approach</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Our focus is on delivering measurable results, whether through high-converting websites, impactful ad campaigns, or engaging content.
              </p>
            </div>
            <div className="flex-1 flex items-center">
              <DonutChartIllustration />
            </div>
          </div>

          {/* End-to-End Support */}
          <div className="bg-neutral-100 rounded-3xl p-6 flex flex-col min-h-[340px] overflow-hidden">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">End-to-End Support</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                From planning to post-launch, we provide full-cycle support, staying by your side every step of the way.
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
