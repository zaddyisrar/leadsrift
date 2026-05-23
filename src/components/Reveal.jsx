"use client";

import { useEffect, useState } from "react";
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function checkScreen() {
      setIsMobile(window.innerWidth < 768);
    }

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  if (isMobile) {
    return <div className={`${width} ${className}`}>{children}</div>;
  }

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