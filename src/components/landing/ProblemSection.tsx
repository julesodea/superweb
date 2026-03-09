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
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionWrapper>
          <div className="text-center mb-16">
            <h2
              className={`text-3xl md:text-5xl font-bold mb-6 ${
                isDarkMode ? "text-white" : "text-slate-800"
              }`}
            >
              Sound familiar?
            </h2>
          </div>
        </SectionWrapper>

        <div className="space-y-8">
          {pains.map((pain, index) => (
            <SectionWrapper key={index}>
              <div
                className={`rounded-2xl p-8 md:p-10 ${
                  isDarkMode ? "bg-slate-800/30" : "bg-neutral-50"
                }`}
              >
                <h3
                  className={`text-xl md:text-2xl font-semibold mb-3 ${
                    isDarkMode ? "text-white" : "text-slate-800"
                  }`}
                >
                  {pain.headline}
                </h3>
                <p
                  className={`text-lg leading-relaxed ${
                    isDarkMode ? "text-slate-400" : "text-slate-500"
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
            className={`text-center text-xl md:text-2xl font-medium mt-16 ${
              isDarkMode ? "text-slate-200" : "text-slate-700"
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
