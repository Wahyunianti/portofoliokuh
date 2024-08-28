"use client";

import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { AnimatePresence, motion } from "framer-motion";

export const Card = ({
  title,
  desc,
  phase,
  children,
}: {
  title: string;
  desc: string;
  phase: string;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative h-[80vh] sm:h-[40rem]"
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10">
        <div className="pointer-events-none group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center">
          <HoverBorderGradient className=" text-[1.2rem] px-7">
            {phase}
          </HoverBorderGradient>
        </div>
        <h2 className="dark:text-white text-2xl text-center opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <p className="dark:text-white text-xs text-center opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-1 group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {desc}
        </p>
      </div>
    </div>
  );
};
