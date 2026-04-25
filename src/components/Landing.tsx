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

  return (
    <div
      className={`min-h-screen overflow-hidden transition-colors duration-300 ${
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
                  SaaS websites, launch pages, and product UI
                </motion.div>

                <motion.h1
                  {...reveal(0.14)}
                  className="text-balance max-w-5xl text-[clamp(3rem,8vw,7.75rem)] font-black leading-[0.88] tracking-normal"
                >
                  Ship a site that makes the next step obvious.
                </motion.h1>

                <motion.p
                  {...reveal(0.24)}
                  className={`mt-7 max-w-2xl text-lg leading-8 md:text-xl ${
                    isDarkMode ? "text-[#f6f3ec]/72" : "text-[#101113]/68"
                  }`}
                >
                  Superweb designs and builds focused marketing sites for SaaS
                  teams that need clearer positioning, cleaner product stories,
                  and fewer handoffs before launch.
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
                    products launched
                  </div>
                  <div>
                    <strong className="block text-2xl font-black tabular-nums text-[#e8bd3f]">
                      6.5
                    </strong>
                    days avg. first draft
                  </div>
                  <div>
                    <strong className="block text-2xl font-black tabular-nums text-[#e8bd3f]">
                      3.1x
                    </strong>
                    avg. demo lift
                  </div>
                </motion.div>
              </div>

              <motion.div
                {...reveal(0.28)}
                className="animate-float-slow hero-panel relative ml-auto w-full max-w-[560px] rounded-xl border border-white/10 bg-[#151619]/82 p-3 text-[#f6f3ec] backdrop-blur-xl"
              >
                <div className="flex items-center gap-2 border-b border-white/10 px-2 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#e8614d]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#e8bd3f]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#77b989]" />
                  <span className="ml-3 text-xs font-medium text-white/42">
                    launch-readiness.ts
                  </span>
                </div>
                <div className="grid gap-3 p-3">
                  {[
                    ["Positioning", "clear", "92"],
                    ["Product story", "mapped", "88"],
                    ["CTA hierarchy", "ready", "96"],
                    ["Performance", "passing", "94"],
                  ].map(([label, status, score], index) => (
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
                        <span className="text-sm font-semibold">{label}</span>
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
                          style={{ transformOrigin: "left", width: `${score}%` }}
                          className="h-full rounded-full bg-[#e8bd3f]"
                        />
                      </div>
                    </motion.div>
                  ))}
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
