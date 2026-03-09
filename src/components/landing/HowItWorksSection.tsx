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
    <section id="process" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionWrapper>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 mb-6 rounded-full text-sm font-medium bg-[#FCD34D] text-black">
              Process
            </span>
            <h2
              className={`text-4xl md:text-5xl font-bold mb-4 ${
                isDarkMode ? "text-white" : "text-slate-800"
              }`}
            >
              Three steps. That's it.
            </h2>
          </div>
        </SectionWrapper>

        <div className="space-y-8">
          {steps.map((item, index) => (
            <SectionWrapper key={index}>
              <div className="flex items-start gap-6 md:gap-10">
                <span
                  className={`text-5xl md:text-6xl font-bold shrink-0 w-[1.5em] text-center tabular-nums ${
                    isDarkMode ? "text-slate-700" : "text-neutral-200"
                  }`}
                >
                  {item.step}
                </span>
                <div>
                  <h3
                    className={`text-2xl font-semibold mb-2 ${
                      isDarkMode ? "text-white" : "text-slate-800"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-lg ${
                      isDarkMode ? "text-slate-400" : "text-slate-500"
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
