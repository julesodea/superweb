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
              ${isDarkMode ? "bg-neutral-950" : "bg-linear-to-br from-neutral-50 to-neutral-100"}
            `}
          >
            {/* Animated gradient background */}
            <div
              className={`
                absolute inset-0 animate-gradient
                ${
                  isDarkMode
                    ? "bg-linear-to-br from-slate-800/20 via-slate-700/20 to-slate-800/20"
                    : "bg-linear-to-br from-neutral-100/40 via-neutral-100/40 to-neutral-100/40"
                }
              `}
            />

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 mask-[linear-gradient(to_bottom,transparent,black)]">
              <div
                className={`
                  absolute inset-0 bg-size-[4rem_4rem]
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
              {/* Decorative SVG — right side, vertically centered with text */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="absolute top-1/2 right-25 -translate-y-1/2 hidden lg:block"
              >
                <motion.div
                  animate={{
                    y: [0, -12, 0],
                    rotate: [0, 4, -2, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{ filter: "drop-shadow(0 0 12px #FCD34D66)" }}
                >
                <svg width="144" height="176" viewBox="0 0 86 105" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="2px" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M82.555 63.6104L46.645 92.2204L26.645 102.22L40.865 90.8904L62.555 73.6104C63.785 72.6604 64.025 71.0004 63.265 68.6404C62.495 66.2804 61.165 64.5504 59.275 63.4604L42.365 53.6904L62.365 43.6904L79.275 53.4604C81.165 54.5504 82.495 56.2804 83.265 58.6404C84.025 61.0004 83.785 62.6604 82.555 63.6104Z" stroke="#FCD34D" strokeLinejoin="round"/>
                  <path d="M46.645 92.2205C46.335 92.4605 46.005 92.6305 45.645 92.7205L46.645 92.2205Z" stroke="#FCD34D" strokeLinejoin="round"/>
                  <path d="M62.555 73.6104L40.8649 90.8904L26.645 102.22C25.845 102.85 24.865 102.99 23.705 102.65C22.535 102.31 21.415 101.54 20.315 100.32C19.225 99.1104 18.375 97.7204 17.755 96.1504C17.135 94.5804 16.8949 93.1304 17.0449 91.8004L20.5349 66.1404L7.00496 58.3304C5.25496 57.3204 3.96497 55.6704 3.13497 53.4004C2.29497 51.1204 2.38493 49.4404 3.40493 48.3604L36.0349 13.3504C36.2149 13.1604 36.4049 13.0104 36.6149 12.8804L36.685 12.8404L36.9849 12.7004C37.5249 12.4604 38.155 12.4204 38.875 12.5504C40.035 12.7604 41.2349 13.4704 42.4749 14.6904C43.0149 15.2204 43.485 15.7804 43.895 16.3804C44.435 17.1504 44.875 17.9904 45.205 18.8904C45.785 20.4804 46.0049 21.9404 45.8549 23.2804L42.3649 53.6904L59.275 63.4604C61.165 64.5504 62.495 66.2804 63.265 68.6404C64.025 71.0004 63.785 72.6604 62.555 73.6104Z" stroke="#FCD34D" strokeLinejoin="round"/>
                  <path d="M65.8549 13.2804L62.3649 43.6904L42.3649 53.6904L45.8549 23.2804C46.0049 21.9404 45.7849 20.4804 45.2049 18.8904C44.8749 17.9904 44.4349 17.1504 43.8949 16.3804C43.4849 15.7804 43.0149 15.2204 42.4749 14.6904C41.2349 13.4704 40.0349 12.7604 38.8749 12.5504C38.1549 12.4204 37.5249 12.4604 36.9849 12.7004L56.7249 2.82043C57.3349 2.48043 58.0449 2.39043 58.8749 2.55043C60.0349 2.76043 61.2349 3.47043 62.4749 4.69043C63.7049 5.90043 64.6149 7.30043 65.2049 8.89043C65.7849 10.4804 66.0049 11.9404 65.8549 13.2804Z" stroke="#FCD34D" strokeLinejoin="round"/>
                  <path d="M56.8349 2.76038L56.7249 2.82038" stroke="#FCD34D" strokeLinejoin="round"/>
                </svg>
                </motion.div>
              </motion.div>

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
                  <Button
                    href="#contact"
                    variant={isDarkMode ? "light" : "dark"}
                  >
                    Book a free strategy call
                    <img
                      src="/arrow-right.svg"
                      alt="arrow right"
                      width={15}
                      height={15}
                      className="group-hover:translate-x-1 transition-transform duration-200"
                    />
                  </Button>
                  <Button
                    href="#process"
                    variant={isDarkMode ? "dark" : "light"}
                  >
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
