"use client";
import React, { ElementType } from "react";
import { motion, useInView, Variants } from "framer-motion";

export interface TimelineContentProps {
  as?: ElementType | string;
  animationNum?: number;
  timelineRef?: React.RefObject<HTMLElement | null>;
  customVariants?: any;
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export const TimelineContent = ({
  as: Component = "div",
  animationNum = 0,
  timelineRef,
  customVariants,
  children,
  className,
  ...props
}: TimelineContentProps) => {
  const isInView = useInView(timelineRef as any, { once: true, margin: "-10%" });
  
  const MotionComponent = motion(Component as any);

  const defaultVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };

  return (
    <MotionComponent
      variants={customVariants || defaultVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={animationNum}
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};
