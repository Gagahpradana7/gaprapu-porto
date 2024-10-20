import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Photo = () => {
  return (
    <div className="relative flex h-[485px] w-[506px] items-center justify-center bottom-20">
      <motion.svg
        className="absolute inset-0 h-full w-full"
        fill="transparent"
        viewBox="0 0 506 506"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="253"
          cy="253"
          r="250"
          stroke="#2196F3"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: "24 10 0 0" }}
          animate={{
            strokeDasharray: ["15 120 25 25 ", "16 25 92 72 ", "4 250 22 22"],
            rotate: [120, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        />
      </motion.svg>

      <div className="relative flex h-[480px] w-[480px] items-center justify-center mb-12">
        <div className="relative w-[470px] h-[470px] rounded-full overflow-hidden shadow-xl mt-12">
          <div className="absolute inset-1 bg-gradient-to-b from-gray-950/50 to-gray-950/85" />
          <Image
            src={"/profileG.png"}
            priority
            quality={100}
            width={470}
            height={470}
            alt=""
            className="object-contain relative z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Photo;
