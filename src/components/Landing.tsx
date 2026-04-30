import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Nav } from "./Nav";
import LogoBanner from "./Banner";
import { BentoGrid } from "./BentoGrid";
import Button from "./Button";
import ProblemSection from "./landing/ProblemSection";
import ServicesGridSection from "./landing/ServicesGridSection";
import SocialProofSection from "./landing/SocialProofSection";
import HowItWorksSection from "./landing/HowItWorksSection";
import PricingSection from "./landing/PricingSection";
import FAQSection from "./landing/FAQSection";
import FinalCTASection from "./landing/FinalCTASection";
import ContactSection from "./landing/ContactSection";
import LandingFooter from "./landing/LandingFooter";

export const LandingComponent = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const shouldReduceMotion = useReducedMotion();
  const motionEase = [0.16, 1, 0.3, 1] as const;

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    document.documentElement.style.backgroundColor = isDarkMode
      ? "#101113"
      : "#f6f3ec";
    document.documentElement.style.colorScheme = isDarkMode ? "dark" : "light";
  }, [isDarkMode]);

  const reveal = (delay = 0) => ({
    initial: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.75, delay, ease: motionEase },
  });

  const ownerSignals = [
    {
      label: "Primary offer",
      status: "buyer-ready",
      score: "92%",
      note: "Clear path from pain to demo",
    },
    {
      label: "Trial intent",
      status: "rising",
      score: "38%",
      note: "CTA sequence tuned for evaluation",
    },
    {
      label: "Sales proof",
      status: "placed",
      score: "84%",
      note: "Use cases matched to buyer objections",
    },
  ];

  const boardMetrics = [
    ["Demo asks", "+27.4%"],
    ["Time to decision", "11 days"],
    ["Launch risk", "low"],
  ];

  return (
    <div
      className={`min-h-[100dvh] overflow-hidden transition-colors duration-300 ${
        isDarkMode ? "bg-[#101113]" : "bg-[#f6f3ec]"
      }`}
    >
      <div className="noise-overlay" />
      <Nav
        isDarkMode={isDarkMode}
        onToggle={() => setIsDarkMode(!isDarkMode)}
      />

      <main>
        <section className="relative px-3 pb-12 pt-3 sm:px-4">
          <div
            className={`hero-shell ${isDarkMode ? "" : "hero-shell-light"} relative isolate mx-auto min-h-[calc(100dvh-6rem)] max-w-[1440px] overflow-hidden rounded-[1.75rem] px-5 py-16 sm:px-8 md:px-12 lg:px-16 ${
              isDarkMode ? "text-[#f6f3ec]" : "text-[#101113]"
            }`}
          >
            <div className="relative z-10 grid min-h-[calc(100dvh-14rem)] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="max-w-4xl">
                <motion.div
                  {...reveal(0.05)}
                  className={`mb-7 inline-flex items-center gap-3 rounded-full border px-3 py-1.5 text-xs font-semibold ${
                    isDarkMode
                      ? "border-white/10 bg-white/5 text-[#f6f3ec]/70"
                      : "border-[#101113]/10 bg-[#101113]/5 text-[#101113]/70"
                  }`}
                >
                  <span className="h-2 w-2 rounded-full bg-[#e8bd3f]" />
                  SaaS launch strategy, product pages, and buyer journeys
                </motion.div>

                <motion.h1
                  {...reveal(0.14)}
                  className="text-balance max-w-5xl text-[clamp(1.6rem,4vw,3.9rem)] font-black leading-[0.96] tracking-normal"
                >
                  Turn product interest into booked demos.
                </motion.h1>

                <motion.p
                  {...reveal(0.24)}
                  className={`mt-7 max-w-2xl text-lg leading-8 md:text-xl ${
                    isDarkMode ? "text-[#f6f3ec]/72" : "text-[#101113]/68"
                  }`}
                >
                  Superweb helps SaaS founders and product owners sharpen the
                  offer, explain the product faster, and launch a website that
                  gives sales a cleaner conversation to follow.
                </motion.p>

                <motion.div
                  {...reveal(0.34)}
                  className="mt-9 flex flex-col gap-3 sm:flex-row"
                >
                  <Button href="#contact" variant="dark">
                    Book a strategy call
                    <img
                      src="/arrow-right.svg"
                      alt=""
                      width={15}
                      height={15}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Button>
                  <Button
                    href="#process"
                    variant="ghost"
                    className={
                      isDarkMode
                        ? "text-[#f6f3ec]"
                        : "text-[#101113]"
                    }
                  >
                    See the process
                  </Button>
                </motion.div>

                <motion.div
                  {...reveal(0.46)}
                  className={`mt-10 grid max-w-2xl grid-cols-3 gap-4 border-t pt-6 text-sm ${
                    isDarkMode
                      ? "border-white/10 text-[#f6f3ec]/56"
                      : "border-[#101113]/10 text-[#101113]/58"
                  }`}
                >
                  <div>
                    <strong className="block text-2xl font-black tabular-nums text-[#e8bd3f]">
                      47
                    </strong>
                    SaaS launches
                  </div>
                  <div>
                    <strong className="block text-2xl font-black tabular-nums text-[#e8bd3f]">
                      6.5
                    </strong>
                    days to first direction
                  </div>
                  <div>
                    <strong className="block text-2xl font-black tabular-nums text-[#e8bd3f]">
                      3.1x
                    </strong>
                    clearer demo path
                  </div>
                </motion.div>
              </div>

              <motion.div
                {...reveal(0.28)}
                className="animate-float-slow hero-panel relative ml-auto w-full max-w-[560px] rounded-xl border border-white/10 bg-[#151619]/82 p-3 text-[#f6f3ec] backdrop-blur-xl"
              >
                <div className="flex flex-col gap-3 border-b border-white/10 px-2 py-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e8bd3f]">
                      Launch board
                    </span>
                    <h2 className="mt-1 text-xl font-black leading-none">
                      Owner view
                    </h2>
                  </div>
                  <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-xs font-semibold text-white/62">
                    <span className="h-2 w-2 rounded-full bg-[#77b989]" />
                    Ready for sales review
                  </div>
                </div>

                <div className="grid gap-3 p-3">
                  <div className="grid gap-3 sm:grid-cols-3">
                    {boardMetrics.map(([label, value], index) => (
                      <motion.div
                        key={label}
                        initial={
                          shouldReduceMotion
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 12 }
                        }
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.65,
                          delay: 0.42 + index * 0.08,
                          ease: motionEase,
                        }}
                        className="rounded-lg border border-white/8 bg-white/[0.045] p-3"
                      >
                        <span className="block text-[11px] font-medium text-white/42">
                          {label}
                        </span>
                        <strong className="mt-2 block text-lg font-black tabular-nums text-[#f6f3ec]">
                          {value}
                        </strong>
                      </motion.div>
                    ))}
                  </div>

                  {ownerSignals.map(({ label, status, score, note }, index) => (
                    <motion.div
                      key={label}
                      initial={
                        shouldReduceMotion
                          ? { opacity: 1, x: 0 }
                          : { opacity: 0, x: 18 }
                      }
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.7,
                        delay: 0.5 + index * 0.09,
                        ease: motionEase,
                      }}
                      className="rounded-lg border border-white/8 bg-white/[0.045] p-4"
                    >
                      <div className="mb-3 flex items-center justify-between gap-4">
                        <div>
                          <span className="text-sm font-semibold">{label}</span>
                          <p className="mt-1 text-xs leading-5 text-white/42">
                            {note}
                          </p>
                        </div>
                        <span className="rounded-md bg-[#e8bd3f]/14 px-2 py-1 text-xs font-semibold text-[#e8bd3f]">
                          {status}
                        </span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{
                            duration: 1,
                            delay: 0.7 + index * 0.1,
                            ease: motionEase,
                          }}
                          style={{ transformOrigin: "left", width: score }}
                          className="h-full rounded-full bg-[#e8bd3f]"
                        />
                      </div>
                    </motion.div>
                  ))}

                  <motion.div
                    initial={
                      shouldReduceMotion
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 12 }
                    }
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.86, ease: motionEase }}
                    className="rounded-lg border border-[#e8bd3f]/18 bg-[#e8bd3f]/10 p-4"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#e8bd3f]">
                      Next owner decision
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[#f6f3ec]/74">
                      Lead with rollout time saved, then move buyers to a demo
                      before the feature comparison section.
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
      </section>

      <LogoBanner isDarkMode={isDarkMode} />
      <ProblemSection isDarkMode={isDarkMode} />
      <ServicesGridSection isDarkMode={isDarkMode} />
      <BentoGrid isDarkMode={isDarkMode} />
      <SocialProofSection isDarkMode={isDarkMode} />
      <HowItWorksSection isDarkMode={isDarkMode} />
      <PricingSection isDarkMode={isDarkMode} />
      <FAQSection isDarkMode={isDarkMode} />
      <FinalCTASection isDarkMode={isDarkMode} />
      <ContactSection isDarkMode={isDarkMode} />
      </main>
      <LandingFooter isDarkMode={isDarkMode} />
    </div>
  );
};

export default LandingComponent;
