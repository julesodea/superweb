import Button from "../Button";
import SectionWrapper from "./SectionWrapper";

const FinalCTASection = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <section className="px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionWrapper>
          <div
            className={`relative overflow-hidden rounded-xl p-8 md:p-14 ${
              isDarkMode
                ? "border border-white/8 bg-[#e8bd3f]/10"
                : "border border-[#101113]/8 bg-[#101113]"
            }`}
          >
            <h2
              className={`text-balance mb-6 max-w-4xl text-4xl font-black leading-none md:text-6xl ${
                isDarkMode ? "text-[#f6f3ec]" : "text-[#f6f3ec]"
              }`}
            >
              Replace the vague website brief with a launch plan.
            </h2>
            <p
              className={`mb-4 max-w-2xl text-lg leading-8 md:text-xl ${
                isDarkMode ? "text-[#f6f3ec]/68" : "text-[#f6f3ec]/70"
              }`}
            >
              Book a strategy call and we will map the pages, message, and
              build path that give your team the fastest credible launch.
            </p>
            <p
              className={`mb-8 text-sm ${
                isDarkMode ? "text-[#f6f3ec]/44" : "text-[#f6f3ec]/46"
              }`}
            >
              No commitment. No sales pitch. Just honest advice on your product.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button href="#contact" variant="dark">
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
              className={`mt-6 text-xs ${
                isDarkMode ? "text-[#f6f3ec]/34" : "text-[#f6f3ec]/38"
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
