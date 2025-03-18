"use client";

import React from "react";
import { motion } from "framer-motion";

export default function page() {
  return (
    <div className="w-screen h-screen bg-black fixed top-0 bottom-0 right-0 left-0 m-auto text-center justify-center items-center flex flex-col remaster">
      {["R", "E", "M", "A", "S", "T", "E", "R"].map((letter, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: (index + 1) * 0.1,
            repeat: Infinity,
            repeatType: "mirror",
            repeatDelay: 0,
          }}
          className="md:text-7xl text-5xl font-bold text-remaster"
        >
          {letter}
        </motion.div>
      ))}
      <div className="absolute bottom-0 text-remaster mb-10">
        {" "}
        <p className="text-remaster opacity-50">coming soon</p>
      </div>
    </div>
  );
}
