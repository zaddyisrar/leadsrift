"use client";

import { motion } from "framer-motion";

export default function Reveal({
  children,
  delay = 0,
  y = 34,
  x = 0,
  width = "w-full",
  className = "",
  once = true,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y,
        x,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
      }}
      viewport={{
        once,
        amount: 0.18,
      }}
      transition={{
        duration: 0.72,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`${width} ${className}`}
    >
      {children}
    </motion.div>
  );
}