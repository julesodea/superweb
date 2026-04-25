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
    <section id="pricing" className="px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionWrapper>
          <div className="mb-16 grid gap-6 md:grid-cols-[0.85fr_1.15fr] md:items-end">
            <span className="inline-block w-fit rounded-md bg-[#e8bd3f] px-3 py-1.5 text-sm font-black text-[#101113]">
              Pricing
            </span>
            <div>
              <h2
                className={`text-balance text-4xl font-black leading-none md:text-6xl ${
                  isDarkMode ? "text-[#f6f3ec]" : "text-[#101113]"
                }`}
              >
                One partner. Two clean ways to work.
              </h2>
              <p
                className={`mt-5 max-w-2xl text-lg leading-8 ${
                  isDarkMode ? "text-[#f6f3ec]/58" : "text-[#101113]/62"
                }`}
              >
                Pick a focused launch sprint or keep a small product-ready team
                on call.
              </p>
            </div>
          </div>
        </SectionWrapper>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {plans.map((plan, index) => (
            <SectionWrapper key={index} delay={index * 0.08}>
              <div
                className={`relative flex h-full flex-col rounded-xl p-7 transition-transform duration-300 hover:-translate-y-1 md:p-8 ${
                  index === 1
                    ? "border border-[#e8bd3f]/45 bg-[#e8bd3f]/10"
                    : isDarkMode
                      ? "border border-white/8 bg-white/[0.04]"
                      : "border border-[#101113]/8 bg-white/50"
                }`}
              >
                {index === 1 && (
                  <span className="mb-5 w-fit rounded-md bg-[#e8bd3f] px-2.5 py-1 text-xs font-black text-[#101113]">
                    Best for ongoing teams
                  </span>
                )}
                <h3
                  className={`mb-1 text-3xl font-black ${
                    isDarkMode ? "text-[#f6f3ec]" : "text-[#101113]"
                  }`}
                >
                  {plan.name}
                </h3>
                <span
                  className={`mb-5 text-sm font-semibold ${
                    isDarkMode ? "text-[#f6f3ec]/44" : "text-[#101113]/50"
                  }`}
                >
                  {plan.type}
                </span>
                <p
                  className={`mb-8 min-h-16 leading-7 ${
                    isDarkMode ? "text-[#f6f3ec]/64" : "text-[#101113]/66"
                  }`}
                >
                  {plan.description}
                </p>
                <p
                  className={`mb-4 text-xs font-black ${
                    isDarkMode ? "text-[#f6f3ec]/44" : "text-[#101113]/48"
                  }`}
                >
                  What's included:
                </p>
                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md bg-[#e8bd3f]">
                        <svg
                          className="h-3 w-3 text-[#101113]"
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
                          isDarkMode ? "text-[#f6f3ec]/68" : "text-[#101113]/68"
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
                    variant={index === 1 ? "dark" : isDarkMode ? "light" : "ghost"}
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
