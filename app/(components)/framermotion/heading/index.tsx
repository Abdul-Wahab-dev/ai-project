"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
const Heading = ({ children, delay, classes, duration = 0.5 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.h1
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
    </motion.h1>
  );
};

export default Heading;
