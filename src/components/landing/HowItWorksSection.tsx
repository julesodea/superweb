import SectionWrapper from "./SectionWrapper";

const steps = [
  {
    step: "01",
    title: "Book a call",
    description:
      "30-minute strategy session. We learn your goals, audience, and constraints. No fluff, no sales pitch.",
  },
  {
    step: "02",
    title: "We build it",
    description:
      "Our team designs, develops, and tests your product. You get updates every 48 hours. Two rounds of revisions included.",
  },
  {
    step: "03",
    title: "You launch",
    description:
      "We deploy, hand over everything, and stick around for support. You own 100% of the code and assets.",
  },
];

const HowItWorksSection = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <section id="process" className="px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionWrapper>
          <div className="mb-16 max-w-3xl">
            <span className="mb-6 inline-block rounded-md bg-[#e8bd3f] px-3 py-1.5 text-sm font-black text-[#101113]">
              Process
            </span>
            <h2
              className={`text-balance text-4xl font-black leading-none md:text-6xl ${
                isDarkMode ? "text-[#f6f3ec]" : "text-[#101113]"
              }`}
            >
              Three steps, with fewer places to lose momentum.
            </h2>
          </div>
        </SectionWrapper>

        <div
          className={`overflow-hidden rounded-xl border ${
            isDarkMode ? "border-white/8" : "border-[#101113]/8"
          }`}
        >
          {steps.map((item, index) => (
            <SectionWrapper key={index} delay={index * 0.08}>
              <div
                className={`grid gap-6 p-6 md:grid-cols-[10rem_1fr] md:p-8 ${
                  index > 0
                    ? isDarkMode
                      ? "border-t border-white/8"
                      : "border-t border-[#101113]/8"
                    : ""
                } ${isDarkMode ? "bg-white/[0.035]" : "bg-white/45"}`}
              >
                <span
                  className={`text-5xl font-black tabular-nums md:text-7xl ${
                    isDarkMode ? "text-[#e8bd3f]" : "text-[#101113]/18"
                  }`}
                >
                  {item.step}
                </span>
                <div>
                  <h3
                    className={`mb-3 text-2xl font-black ${
                      isDarkMode ? "text-[#f6f3ec]" : "text-[#101113]"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`max-w-2xl text-lg leading-8 ${
                      isDarkMode ? "text-[#f6f3ec]/58" : "text-[#101113]/62"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
