"use client";
import React, { useRef, ReactNode } from "react";
import { motion, useInView } from "framer-motion";
const Paragraph = ({
  children,
  delay,
  classes,
  duration = 0.5,
}: {
  delay: number;
  classes?: string;
  duration?: number;
  children: ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.p
      ref={ref}
      className={classes}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visiable: { opacity: 1, y: 0 },
      }}
      animate="visiable"
      initial="hidden"
      transition={{ duration, delay }}
    >
      {children}
    </motion.p>
  );
};

export default Paragraph;
