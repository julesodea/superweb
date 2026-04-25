import SectionWrapper from "./SectionWrapper";

const services = [
  {
    title: "Websites and landing pages",
    description:
      "High-converting pages designed to turn visitors into customers.",
  },
  {
    title: "Brand systems",
    description: "Cohesive visual identity that scales with your product.",
  },
  {
    title: "Product design",
    description: "Intuitive interfaces that users love and teams ship fast.",
  },
  {
    title: "Growth assets",
    description:
      "Sales decks, one-pagers, and GTM collateral that close deals.",
  },
  {
    title: "Development",
    description: "Clean, production-ready code in React, Webflow, or Framer.",
  },
  {
    title: "Ecommerce development",
    description: "Custom Shopify stores, themes, and apps built to convert and scale.",
  },
];

const ServicesGridSection = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <section id="services" className="px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionWrapper>
          <div className="mb-16 max-w-3xl">
            <span
              className="mb-6 inline-block rounded-md bg-[#e8bd3f] px-3 py-1.5 text-sm font-black text-[#101113]"
            >
              Services
            </span>
            <h2
              className={`text-balance mb-5 text-4xl font-black leading-none md:text-6xl ${
                isDarkMode ? "text-[#f6f3ec]" : "text-[#101113]"
              }`}
            >
              What we build when speed and clarity matter.
            </h2>
            <p
              className={`max-w-2xl text-lg leading-8 ${
                isDarkMode ? "text-[#f6f3ec]/62" : "text-[#101113]/64"
              }`}
            >
              Everything a SaaS scale-up needs to move faster, convert clearer,
              and scale profitably.
            </p>
          </div>
        </SectionWrapper>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
          {services.map((service, index) => (
            <SectionWrapper
              key={index}
              delay={(index % 3) * 0.07}
              className={`h-full ${
                index === 0 || index === 5 ? "md:col-span-3" : "md:col-span-2"
              }`}
            >
              <div
                className={`group flex h-full min-h-[220px] flex-col justify-between rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 ${
                  isDarkMode
                    ? "border border-white/8 bg-white/[0.045] hover:bg-white/[0.07]"
                    : "border border-[#101113]/8 bg-white/55 hover:bg-white"
                }`}
              >
                <span className="mb-10 block text-xs font-black tabular-nums text-[#e8bd3f]">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <h3
                  className={`mb-3 text-2xl font-black leading-tight ${
                    isDarkMode ? "text-[#f6f3ec]" : "text-[#101113]"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`max-w-sm leading-7 ${
                    isDarkMode ? "text-[#f6f3ec]/58" : "text-[#101113]/62"
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
