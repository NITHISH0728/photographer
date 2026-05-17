"use client";
import React from "react";
import { motion } from "framer-motion";

export const VerticalCutReveal = ({
  children,
  splitBy = "words",
  staggerDuration = 0.1,
  staggerFrom = "first",
  reverse = false,
  transition,
}: {
  children: string;
  splitBy?: "words" | "characters";
  staggerDuration?: number;
  staggerFrom?: "first" | "last" | "center";
  reverse?: boolean;
  transition?: any;
}) => {
  const words = children.split(splitBy === "words" ? " " : "");

  return (
    <div className="flex flex-wrap overflow-hidden inline-flex">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ y: reverse ? -50 : 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            ...(transition || { type: "spring", stiffness: 250, damping: 30 }),
            delay: transition?.delay ? transition.delay + i * staggerDuration : i * staggerDuration,
          }}
          className="mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};
