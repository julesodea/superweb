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
  { number: "47", label: "SaaS products launched" },
  { number: "3.1x", label: "Avg. conversion lift" },
  { number: "6.5 days", label: "Avg. first draft" },
];

const SocialProofSection = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <section id="results" className="px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionWrapper>
          <div className="mb-16 grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-end">
            <span className="inline-block w-fit rounded-md bg-[#e8bd3f] px-3 py-1.5 text-sm font-black text-[#101113]">
              Results
            </span>
            <h2
              className={`text-balance text-4xl font-black leading-none md:text-6xl ${
                isDarkMode ? "text-[#f6f3ec]" : "text-[#101113]"
              }`}
            >
              Proof that reads like a real launch report.
            </h2>
          </div>
        </SectionWrapper>

        <SectionWrapper>
          <div
            className={`relative mb-16 grid grid-cols-1 overflow-hidden rounded-xl p-8 md:grid-cols-3 ${
              isDarkMode
                ? "border border-white/8 bg-white/[0.045]"
                : "border border-[#101113]/8 bg-white/55"
            }`}
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`relative p-6 text-left ${
                  index > 0
                    ? isDarkMode
                      ? "border-t border-white/8 md:border-l md:border-t-0"
                      : "border-t border-[#101113]/8 md:border-l md:border-t-0"
                    : ""
                }`}
              >
                <div
                  className={`mb-3 text-5xl font-black tabular-nums md:text-6xl ${
                    isDarkMode ? "text-[#f6f3ec]" : "text-[#101113]"
                  }`}
                >
                  {stat.number}
                </div>
                <div
                  className={isDarkMode ? "text-[#f6f3ec]/56" : "text-[#101113]/60"}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <SectionWrapper key={index} delay={index * 0.08}>
              <div
                className={`flex h-full flex-col justify-between rounded-lg p-6 ${
                  isDarkMode
                    ? "border border-white/8 bg-white/[0.04]"
                    : "border border-[#101113]/8 bg-white/50"
                }`}
              >
                <p
                  className={`mb-8 text-lg leading-8 ${
                    isDarkMode ? "text-[#f6f3ec]/76" : "text-[#101113]/72"
                  }`}
                >
                  "{t.quote}"
                </p>
                <div>
                  <div
                    className={`font-black ${
                      isDarkMode ? "text-[#f6f3ec]" : "text-[#101113]"
                    }`}
                  >
                    {t.name}
                  </div>
                  <div
                    className={`text-sm ${
                      isDarkMode ? "text-[#f6f3ec]/44" : "text-[#101113]/48"
                    }`}
                  >
                    {t.role}
                  </div>
                  <div
                    className={`mt-3 text-sm font-black ${
                      isDarkMode ? "text-[#e8bd3f]" : "text-[#101113]"
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
