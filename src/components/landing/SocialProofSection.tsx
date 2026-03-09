import SectionWrapper from "./SectionWrapper";

const testimonials = [
  {
    quote:
      "Superweb delivered our entire SaaS landing page in 5 days. Conversions jumped 3.2x in the first month.",
    name: "Sarah Chen",
    role: "Co-Founder, Metricly",
    metric: "3.2x conversion lift",
  },
  {
    quote:
      "We tried three agencies before finding Superweb. They actually understood SaaS and shipped faster than our own team.",
    name: "James Okoro",
    role: "Head of Growth, Stackflow",
    metric: "Launched in 6 days",
  },
  {
    quote:
      "The ROI was immediate. Our demo request rate doubled within two weeks of the new design going live.",
    name: "Maria Gonzalez",
    role: "CEO, Planbase",
    metric: "2x demo requests",
  },
];

const stats = [
  { number: "50+", label: "SaaS products launched" },
  { number: "3.1x", label: "Avg. conversion lift" },
  { number: "7 days", label: "Avg. delivery time" },
];

const SocialProofSection = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <section id="results" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionWrapper>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 mb-6 rounded-full text-sm font-medium bg-[#FCD34D] text-black">
              Results
            </span>
            <h2
              className={`text-4xl md:text-5xl font-bold mb-4 ${
                isDarkMode ? "text-white" : "text-slate-800"
              }`}
            >
              Don't take our word for it
            </h2>
          </div>
        </SectionWrapper>

        <SectionWrapper>
          <div
            className={`relative overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 rounded-2xl p-8 ${
              isDarkMode ? "bg-slate-800/50" : "bg-neutral-50"
            }`}
          >
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-50">
              <div
                className={`
                  absolute inset-0 bg-[size:3rem_3rem]
                  ${
                    isDarkMode
                      ? "bg-[linear-gradient(to_right,#64748b20_1px,transparent_1px),linear-gradient(to_bottom,#64748b20_1px,transparent_1px)]"
                      : "bg-[linear-gradient(to_right,#4b5563_1px,transparent_1px),linear-gradient(to_bottom,#4b5563_1px,transparent_1px)] opacity-[0.08]"
                  }
                `}
              />
            </div>
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div
                  className={`text-4xl md:text-5xl font-bold mb-2 ${
                    isDarkMode ? "text-white" : "text-slate-800"
                  }`}
                >
                  {stat.number}
                </div>
                <div className={isDarkMode ? "text-slate-400" : "text-slate-500"}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <SectionWrapper key={index}>
              <div
                className={`rounded-2xl p-8 h-full flex flex-col justify-between ${
                  isDarkMode ? "bg-slate-800/30" : "bg-neutral-50"
                }`}
              >
                <p
                  className={`text-lg mb-6 leading-relaxed ${
                    isDarkMode ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  "{t.quote}"
                </p>
                <div>
                  <div
                    className={`font-semibold ${
                      isDarkMode ? "text-white" : "text-slate-800"
                    }`}
                  >
                    {t.name}
                  </div>
                  <div
                    className={`text-sm ${
                      isDarkMode ? "text-slate-500" : "text-slate-400"
                    }`}
                  >
                    {t.role}
                  </div>
                  <div
                    className={`text-sm font-medium mt-2 ${
                      isDarkMode ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    {t.metric}
                  </div>
                </div>
              </div>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
