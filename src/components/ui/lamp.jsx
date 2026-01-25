"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const LampContainer = ({ children, className }) => {
  return (
    <div
      className={cn(
        "relative flex h-20 w-full items-center justify-center overflow-hidden bg-slate-950 rounded-md z-0",
        className
      )}
    >
      {/* Lamp Glow Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0.5, width: "10rem" }}
          whileInView={{ opacity: 1, width: "20rem" }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-80 rounded-full bg-cyan-500 blur-3xl opacity-30"
        />
        <motion.div
          initial={{ opacity: 0.5, width: "8rem" }}
          whileInView={{ opacity: 1, width: "16rem" }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[2.5rem] h-6 w-64 rounded-full bg-cyan-400 blur-2xl opacity-40"
        />
      </div>

      {/* Text Content */}
      <div className="relative z-10 text-center text-white text-lg md:text-xl font-medium">
      <h2 className="text-3xl font-semibold text-center ">
          Explore Technologies
        </h2>
      </div>
    </div>
  );
};
