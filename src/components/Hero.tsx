import { motion } from "motion/react";
export const Hero = () => {
  return (
    <div className="px-4 pb-16 lg:pt-32 max-w-7xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
        className="div"
      >
        <div className="mb-4">
          <span className="text-xs font-semibold text-gray-500 tracking-wide uppercase">
            Welcome to the future
          </span>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight text-gray-900 mb-8 lg:mb-12">
          Transform your web presence
          <br />
          with powerful solutions
        </h1>
      </motion.div>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-12">
          Elevate your online business with our comprehensive suite of tools.
          Built for modern teams who demand performance, reliability, and
          scalability.
        </p>
      </motion.div>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.55 }}
        className="div"
      >
        <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-xs mx-auto">
          <a
            href="#start"
            className="inline-flex items-center justify-center rounded-2xl bg-black text-white px-1 py-4 text-lg font-semibold hover:bg-black/90 transition-colors w-full"
          >
            Get Started
          </a>
          <a
            href="#learn"
            className="inline-flex items-center justify-center rounded-2xl border-2 border-gray-200 bg-white px-1 py-4 text-lg font-semibold hover:bg-gray-50 transition-colors w-full"
          >
            Learn More
          </a>
        </div>
      </motion.div>
    </div>
  );
};
