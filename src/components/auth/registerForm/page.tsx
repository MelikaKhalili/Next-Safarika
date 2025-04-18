"use client";
import TravelImg from "@/assets/svgs/TraelunDrwo.svg";
import WorldunDrow from "@/assets/svgs/WorldunDrow.svg";
import { motion } from "framer-motion"; // import motion from framer-motion
import Image from "next/image";
import InputField from "./inputfield/InputField";
import "./register.css";

export default function RegisterForm() {
  return (
    <div className="parent">
      <InputField />
      <motion.div
        className="absolute left-44 top-24 z-[999]"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <Image className="w-30 h-30" src={TravelImg} alt="TravelImg" />
      </motion.div>
      <motion.div
        className="absolute !right-52 bottom-6 z-[999]"
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <Image className="w-30 h-30" src={WorldunDrow} alt="WorldunDrow" />
      </motion.div>
    </div>
  );
}
