import Button from "../Button";
import SectionWrapper from "./SectionWrapper";

const plans = [
  {
    name: "Launch Sprint",
    type: "One-off project",
    description:
      "For teams that need a new or updated SaaS site or launch page fast.",
    features: [
      "New or redesigned landing page, brand, mini-site",
      "Copy, design, and build (Webflow or Framer)",
      "Basic analytics + form integrations",
      "1 revision round",
      "Launch support & QA",
    ],
  },
  {
    name: "Growth Partner",
    type: "Monthly retainer",
    description:
      "For teams that need ongoing web, product, and GTM execution without hiring full-time.",
    features: [
      "Dedicated copy + design + dev pod",
      "3–5 updates per week (pages, product, GTM assets)",
      "Webflow / Framer / React included",
      "Async Slack + monthly planning call",
      "Priority turnaround on launches",
    ],
  },
];

const PricingSection = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <section id="pricing" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionWrapper>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 mb-6 rounded-full text-sm font-medium bg-[#FCD34D] text-black">
              Pricing
            </span>
            <h2
              className={`text-4xl md:text-5xl font-bold mb-4 ${
                isDarkMode ? "text-white" : "text-slate-800"
              }`}
            >
              One partner. Two ways to work together.
            </h2>
            <p
              className={`text-lg max-w-2xl mx-auto ${
                isDarkMode ? "text-slate-400" : "text-slate-500"
              }`}
            >
              No hiring headaches.
            </p>
          </div>
        </SectionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {plans.map((plan, index) => (
            <SectionWrapper key={index}>
              <div
                className={`rounded-2xl p-8 h-full flex flex-col ${
                  isDarkMode ? "bg-slate-800/30" : "bg-neutral-50"
                }`}
              >
                <h3
                  className={`text-2xl font-semibold mb-1 ${
                    isDarkMode ? "text-white" : "text-slate-800"
                  }`}
                >
                  {plan.name}
                </h3>
                <span
                  className={`text-sm font-medium mb-4 ${
                    isDarkMode ? "text-slate-500" : "text-slate-400"
                  }`}
                >
                  {plan.type}
                </span>
                <p
                  className={`text-base mb-6 ${
                    isDarkMode ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {plan.description}
                </p>
                <p
                  className={`text-xs font-semibold uppercase tracking-wider mb-3 ${
                    isDarkMode ? "text-slate-500" : "text-slate-400"
                  }`}
                >
                  What's included:
                </p>
                <ul className="space-y-2.5 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg
                          className="w-3 h-3 text-slate-800"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span
                        className={`text-sm ${
                          isDarkMode ? "text-slate-300" : "text-slate-600"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <Button
                    href="#contact"
                    variant={isDarkMode ? "light" : "dark"}
                    className="w-full"
                  >
                    Book an intro call
                    <img
                      src="/arrow-right.svg"
                      alt="arrow right"
                      width={15}
                      height={15}
                      className="group-hover:translate-x-1 transition-transform duration-200"
                    />
                  </Button>
                </div>
              </div>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
