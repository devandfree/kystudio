import React from "react";
import { motion } from "motion/react";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
}

export default function ScrollReveal({
  children,
  delay = 0,
  duration = 0.8,
  yOffset = 30,
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{
        duration,
        ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for slick premium feel
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
