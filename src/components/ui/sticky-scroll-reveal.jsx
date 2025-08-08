"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);
      return distance < Math.abs(latest - cardsBreakpoints[acc]) ? index : acc;
    }, 0);
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "#f8fafc", // slate-50
    "#ffffff", // white
    "#f1f5f9", // slate-100
  ];

  const linearGradients = [
    "linear-gradient(to bottom right,rgb(149, 200, 209),rgba(91, 135, 230, 0.56))", // cyan to green
    "linear-gradient(to bottom right,rgb(81, 81, 116),rgb(224, 201, 213))", // indigo to pink
    "linear-gradient(to bottom right, #f97316, #eab308)", // orange to yellow
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative flex h-[32rem] text-justify justify-center space-x-10 overflow-y-auto rounded-md p-6 shadow-md transition-colors duration-300"
      ref={ref}>
      <div className="relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className=" text-justify my-12">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.4 }}
                className="text-2xl font-semibold text-gray-900 transition-opacity duration-300">
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.4 }}
                className="mt-6 max-w-md text-base text-gray-900 transition-opacity duration-300">
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-10 hidden  h-60 w-80 overflow-hidden rounded-md shadow-lg lg:block transition-all",
          contentClassName
        )}>
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
