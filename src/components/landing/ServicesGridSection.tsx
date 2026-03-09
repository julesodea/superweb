import SectionWrapper from "./SectionWrapper";

const services = [
  {
    title: "Website & Landing Page",
    description:
      "High-converting pages designed to turn visitors into customers.",
  },
  {
    title: "Brand Systems",
    description: "Cohesive visual identity that scales with your product.",
  },
  {
    title: "Product Design",
    description: "Intuitive interfaces that users love and teams ship fast.",
  },
  {
    title: "Growth Assets",
    description:
      "Sales decks, one-pagers, and GTM collateral that close deals.",
  },
  {
    title: "Development",
    description: "Clean, production-ready code in React, Webflow, or Framer.",
  },
  {
    title: "Analytics & Dashboards",
    description: "Custom reporting dashboards and data visualization that drive decisions.",
  },
];

const ServicesGridSection = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <section id="services" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionWrapper>
          <div className="text-center mb-16">
            <span
              className="inline-block px-4 py-2 mb-6 rounded-full text-sm font-medium bg-[#FCD34D] text-black"
            >
              Services
            </span>
            <h2
              className={`text-4xl md:text-5xl font-bold mb-4 ${
                isDarkMode ? "text-white" : "text-slate-800"
              }`}
            >
              What We Create
            </h2>
            <p
              className={`text-lg max-w-2xl mx-auto ${
                isDarkMode ? "text-slate-400" : "text-slate-500"
              }`}
            >
              Everything a SaaS scale-up needs to move faster, convert clearer,
              and scale profitably.
            </p>
          </div>
        </SectionWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <SectionWrapper key={index}>
              <div
                className={`rounded-2xl p-8 h-full transition-colors ${
                  isDarkMode
                    ? "bg-slate-800/30 hover:bg-slate-800/50"
                    : "bg-neutral-50 hover:bg-neutral-100"
                }`}
              >
                <h3
                  className={`text-xl font-semibold mb-3 ${
                    isDarkMode ? "text-white" : "text-slate-800"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    isDarkMode ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  {service.description}
                </p>
              </div>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGridSection;
