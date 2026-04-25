import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

const SectionWrapper = ({
  children,
  className = "",
  delay = 0,
  y = 36,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();
  const hidden = shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y };
  const shown = { opacity: 1, y: 0 };
  const motionEase = [0.16, 1, 0.3, 1] as const;

  return (
    <motion.div
      ref={ref}
      initial={hidden}
      animate={isInView ? shown : hidden}
      transition={{
        duration: 0.8,
        delay,
        ease: motionEase,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SectionWrapper;
