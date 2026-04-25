import SectionWrapper from "./SectionWrapper";

const pains = [
  {
    headline: "Your website looks fine but doesn't convert",
    body: "You spent thousands on a beautiful site. Traffic comes in, but leads don't. Visitors scroll, shrug, and leave. The design isn't the problem - the strategy is.",
  },
  {
    headline: "You're stuck in revision hell",
    body: "Three months in. Twelve rounds of feedback. The agency still doesn't get your vision. You're paying for time, not outcomes - and you're running out of both.",
  },
  {
    headline: "Your competitors are shipping faster than you",
    body: "While you're debating font sizes, they launched two new features. Speed isn't a luxury anymore - it's survival. And your current process is too slow.",
  },
];

const ProblemSection = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <section className="px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionWrapper>
          <div className="mb-14 grid gap-6 md:grid-cols-[0.85fr_1.15fr] md:items-end">
            <p className="text-sm font-semibold text-[#e8bd3f]">
              What usually stalls a launch
            </p>
            <h2
              className={`text-balance text-4xl font-black leading-none md:text-6xl ${
                isDarkMode ? "text-[#f6f3ec]" : "text-[#101113]"
              }`}
            >
              The website is rarely the only problem.
            </h2>
          </div>
        </SectionWrapper>

        <div className="grid gap-4 md:grid-cols-3">
          {pains.map((pain, index) => (
            <SectionWrapper key={index} delay={index * 0.08}>
              <div
                className={`group h-full rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 ${
                  isDarkMode
                    ? "border border-white/8 bg-white/[0.045] hover:bg-white/[0.065]"
                    : "border border-[#101113]/8 bg-white/50 hover:bg-white/80"
                }`}
              >
                <span className="mb-8 block text-sm font-black tabular-nums text-[#e8bd3f]">
                  0{index + 1}
                </span>
                <h3
                  className={`mb-4 text-xl font-black leading-tight ${
                    isDarkMode ? "text-[#f6f3ec]" : "text-[#101113]"
                  }`}
                >
                  {pain.headline}
                </h3>
                <p
                  className={`leading-7 ${
                    isDarkMode ? "text-[#f6f3ec]/58" : "text-[#101113]/62"
                  }`}
                >
                  {pain.body}
                </p>
              </div>
            </SectionWrapper>
          ))}
        </div>

        <SectionWrapper>
          <p
            className={`mx-auto mt-16 max-w-3xl text-balance text-center text-2xl font-black leading-tight md:text-4xl ${
              isDarkMode ? "text-[#f6f3ec]" : "text-[#101113]"
            }`}
          >
            You don't need another agency.
            <br />
            You need a studio that ships.
          </p>
        </SectionWrapper>
      </div>
    </section>
  );
};

export default ProblemSection;
