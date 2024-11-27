import { useState } from "react";
import Button from "./Button";
import { motion } from "framer-motion";

export const LandingComponent = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <section className="relative">
      <div className="relative z-10">
        <div
          className={`
          flex justify-start items-center relative m-4 min-h-[80vh] rounded-3xl 
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

          {/* Theme Toggle Button */}
          {/* <motion.img
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 2 }}
        src="/bolt.svg"
        alt="Bolt"
        className={`
          absolute top-1/2 right-1/4 transform -translate-y-1/2
          w-48 h-48 
          ${isDarkMode ? "invert" : ""} 
        `}
      /> */}

          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`
          text-xs p-2 rounded-xl absolute top-8 right-8
          overflow-hidden whitespace-nowrap
          hover:w-auto w-6 z-10
          ${
            isDarkMode
              ? "bg-neutral-800 text-neutral-800 hover:bg-neutral-800 hover:text-slate-100"
              : "bg-white text-white hover:bg-slate-100 hover:text-slate-950"
          }
        `}
            aria-label="Toggle theme"
          >
            {isDarkMode ? "Let there be light" : "Cast darkness upon the light"}
          </button>

          <div className="flex flex-col h-full justify-center align-center items-start gap-6 relative z-10">
            <div className="flex align-start items-center gap-3">
              <motion.img
                initial={{ opacity: 0, rotateY: 90 }}
                animate={{ opacity: 1, rotateY: 0 }}
                transition={{ duration: 0.25, delay: 0 }}
                src={isDarkMode ? "/logo-light.svg" : "/logo-dark.svg"}
                alt="logo"
                width={50}
                height={50}
              />
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className={`gabarito text-5xl font-medium
              ${isDarkMode ? "text-slate-50" : "text-slate-800"}
            `}
              >
                superweb studio.
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className={`text-lg ${isDarkMode ? "text-slate-200" : "text-slate-600"}`}
            >
              Superweb is a design studio focusing solely on SaaS products.
              <br /> We help businesses achieve goals through design.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10, scale: 1 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.75 }}
            >
              <Button href="/contact" variant={isDarkMode ? "light" : "dark"}>
                Click me or perish
                <img
                  src="/arrow-right.svg"
                  alt="arrow right"
                  width={15}
                  height={15}
                  className={`
                group-hover:translate-x-1 transition-transform duration-200
                ${!isDarkMode ? "invert" : ""}
              `}
                />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingComponent;
