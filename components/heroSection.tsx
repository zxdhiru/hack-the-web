"use client";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4  px-4 justify-center items-center"
      >
        <div className="text-4xl font-bold md:text-7xl dark:text-white text-center">
          Welcome to TechSpire.
        </div>
        <div className="font-extralight md:text-4xl dark:text-neutral-200 py-4 text-xl text-center">
          Where innovation meets creative minds.
          <p>Platform that gives you community of brillinat minds.</p>
          <p>
            Club which helps you in your career growth and skills development.
          </p>
        </div>
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          Join the club
        </button>
      </motion.div>
    </AuroraBackground>
  );
};

export default Hero;
