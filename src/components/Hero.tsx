import { motion } from "motion/react";
export const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center px-4 pb-16 lg:pt-32 max-w-7xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
        className="div"
      >
        <div className="w-fit mb-4 bg-white bg-opacity-70">
          <span className="text-xs font-semibold text-yellow-500 tracking-wide uppercase">
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
        <h1 className="w-fit bg-white bg-opacity-70 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight text-gray-900 mb-8 lg:mb-12">
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
        <p className="w-fit bg-white bg-opacity-70 max-w-2xl mx-auto text-lg text-gray-600 mb-12">
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
          {/* <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-2xl p-4 bg-black text-white text-lg font-semibold hover:bg-black/90 transition-colors w-full"
          >
            Get Started
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-2xl border-2 border-gray-200 bg-white px-1 py-4 text-lg font-semibold hover:bg-gray-50 transition-colors w-full"
          >
            Learn More
          </a> */}
          <div className="bg-white">
            <button className="relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-800 bg-transparent px-6 font-medium text-neutral-800 transition-all duration-100 [box-shadow:3px_3px_rgb(50_50_50)] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(50_50_50)]">
              Get Started
            </button>
          </div>
          <div className="bg-white">
            <button className="bg-neutral-100 relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-800 bg-transparent px-6 font-medium text-neutral-600 transition-all duration-100 [box-shadow:3px_3px_rgb(70_70_70)] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(70_70_70)]">
              Learn More
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
