import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    document.documentElement.style.backgroundColor = isDarkMode
      ? "#0a0a0a"
      : "#ffffff";
    document.documentElement.style.colorScheme = isDarkMode ? "dark" : "light";
  }, [isDarkMode]);

  return (
    <div
      className={`transition-colors duration-300 ${
        isDarkMode ? "bg-neutral-950" : "bg-white"
      }`}
    >
      <Nav
        isDarkMode={isDarkMode}
        onToggle={() => setIsDarkMode(!isDarkMode)}
      />

      {/* ─── HERO ─── */}
      <section className="relative">
        <div className="relative z-10">
          <div
            className={`
              flex justify-center items-center relative m-4 min-h-[65vh] rounded-3xl
              p-4 sm:p-4 md:p-8 lg:p-16 overflow-hidden
              ${isDarkMode ? "bg-neutral-950" : "bg-gradient-to-br from-neutral-50 to-neutral-100"}
            `}
          >
            {/* Animated gradient background */}
            <div
              className={`
                absolute inset-0 animate-gradient
                ${
                  isDarkMode
                    ? "bg-gradient-to-br from-slate-800/20 via-slate-700/20 to-slate-800/20"
                    : "bg-gradient-to-br from-neutral-100/40 via-neutral-100/40 to-neutral-100/40"
                }
              `}
            />

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black)]">
              <div
                className={`
                  absolute inset-0 bg-[size:4rem_4rem]
                  ${
                    isDarkMode
                      ? "bg-[linear-gradient(to_right,#64748b20_1px,transparent_1px),linear-gradient(to_bottom,#64748b20_1px,transparent_1px)]"
                      : "bg-[linear-gradient(to_right,#4b5563_1px,transparent_1px),linear-gradient(to_bottom,#4b5563_1px,transparent_1px)] opacity-[0.08]"
                  }
                `}
              />
              <div
                className={`
                  absolute inset-0
                  ${
                    isDarkMode
                      ? "bg-[radial-gradient(circle_800px_at_100%_200px,#64748b10,transparent)]"
                      : "bg-[radial-gradient(circle_800px_at_100%_200px,#818cf810,transparent)]"
                  }
                `}
              />
            </div>

            {/* Glowing orbs */}
            <div
              className={`
                absolute top-20 right-20 w-72 h-72 rounded-full blur-[128px] animate-pulse
                ${isDarkMode ? "bg-slate-500/30" : "bg-indigo-200/40"}
              `}
            />
            <div
              className={`
                absolute bottom-20 left-20 w-72 h-72 rounded-full blur-[128px] animate-pulse-slow
                ${isDarkMode ? "bg-slate-400/30" : "bg-blue-200/40"}
              `}
            />

            <div
              className="flex flex-col h-full justify-center align-center items-start gap-6 relative z-10 max-w-3xl mx-auto w-full"
              style={{ maxWidth: "1152px" }}
            >
              <div className="flex flex-col gap-6 max-w-3xl">
                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className={`gabarito text-4xl sm:text-5xl md:text-6xl font-bold leading-tight ${
                    isDarkMode ? "text-slate-50" : "text-slate-800"
                  }`}
                >
                  Your business deserves a better website.
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  className={`text-lg md:text-xl max-w-xl ${
                    isDarkMode ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  We design and build high-converting landing pages, marketing
                  sites, and product interfaces for SaaS teams.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <Button href="#contact" variant={isDarkMode ? "light" : "dark"}>
                    Book a free strategy call
                    <img
                      src="/arrow-right.svg"
                      alt="arrow right"
                      width={15}
                      height={15}
                      className="group-hover:translate-x-1 transition-transform duration-200"
                    />
                  </Button>
                  <Button href="#process" variant={isDarkMode ? "dark" : "light"}>
                    See how it works
                  </Button>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className={`text-sm ${
                    isDarkMode ? "text-slate-500" : "text-slate-400"
                  }`}
                >
                  Trusted by 50+ SaaS teams worldwide
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LogoBanner isDarkMode={isDarkMode} />
      <ProblemSection isDarkMode={isDarkMode} />
      <ServicesGridSection isDarkMode={isDarkMode} />
      <BentoGrid />
      <SocialProofSection isDarkMode={isDarkMode} />
      <HowItWorksSection isDarkMode={isDarkMode} />
      <PricingSection isDarkMode={isDarkMode} />
      <FAQSection isDarkMode={isDarkMode} />
      <FinalCTASection isDarkMode={isDarkMode} />
      <ContactSection isDarkMode={isDarkMode} />
      <LandingFooter isDarkMode={isDarkMode} />
    </div>
  );
};

export default LandingComponent;
