"use client";

import React from "react";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Delay in milliseconds
  duration?: number; // Duration in milliseconds
  scaleStart?: number; // Start scale (e.g. 0.98)
  translateY?: number; // Vertical movement in pixels
}

export default function FadeInSection({
  children,
  className = "",
  delay = 0,
  duration = 750, // Premium buttery smooth default duration
  scaleStart = 1,
  translateY = 16,
}: Props) {
  // Convert ms to seconds for Framer Motion
  const delaySec = delay / 1000;
  const durationSec = duration / 1000;

  return (
    <motion.div
      initial={{ opacity: 0, y: translateY, scale: scaleStart }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: durationSec,
        delay: delaySec,
        ease: [0.16, 1, 0.3, 1], // Premium easeOutExpo curve
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
