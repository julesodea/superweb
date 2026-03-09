import Button from "../Button";
import SectionWrapper from "./SectionWrapper";

const FinalCTASection = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionWrapper>
          <div
            className={`rounded-3xl p-10 md:p-16 text-center ${
              isDarkMode ? "bg-slate-800/50" : "bg-neutral-50"
            }`}
          >
            <h2
              className={`text-3xl md:text-5xl font-bold mb-6 ${
                isDarkMode ? "text-white" : "text-slate-800"
              }`}
            >
              Stop losing customers to bad design
            </h2>
            <p
              className={`text-lg md:text-xl mb-4 max-w-2xl mx-auto ${
                isDarkMode ? "text-slate-300" : "text-slate-600"
              }`}
            >
              Go from a site that "looks nice" to one that prints money. Book a
              free strategy call. We'll show you exactly what's costing you
              conversions.
            </p>
            <p
              className={`text-sm mb-8 ${
                isDarkMode ? "text-slate-500" : "text-slate-400"
              }`}
            >
              No commitment. No sales pitch. Just honest advice on your product.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="#contact" variant={isDarkMode ? "light" : "dark"}>
                Book your free call
                <img
                  src="/arrow-right.svg"
                  alt="arrow right"
                  width={15}
                  height={15}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </Button>
            </div>
            <p
              className={`text-xs mt-6 ${
                isDarkMode ? "text-slate-600" : "text-slate-400"
              }`}
            >
              Not satisfied? Full refund. No questions asked.
            </p>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
};

export default FinalCTASection;
