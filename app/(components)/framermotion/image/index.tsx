"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
const FramerImage = ({
  children,
  delay,
  classes = "",
  duration = 0.5,
}: {
  delay: number;
  classes: string;
  duration: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      rel={ref}
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
    </motion.div>
  );
};

export default FramerImage;
