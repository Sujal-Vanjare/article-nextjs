"use client";
import { useState } from "react";
import Button from "./Button";
import { motion } from "framer-motion";

const variants = {
  open: {
    clipPath: "inset(0% 0% 0% 0% round 10px)",
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    clipPath: "inset(0% 0% 100% 100% round 10px)",
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="fixed right-10 top-10">
      <motion.div
        className="relative w-[480px] h-[650px] bg-[#c9fd74] rounded-md"
        // style={{
        //   width: "480px",
        //   height: "650px",
        //   clipPath: "circle(10% at 50% 50%)",
        // }}
        variants={variants}
        animate={isActive ? "open" : "closed"}
        initial="closed"
      ></motion.div>

      <Button isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
}
