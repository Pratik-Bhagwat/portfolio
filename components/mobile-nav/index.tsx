"use client";

import { useState } from "react";
import Wrapper from "../wrapper";
import { motion } from "framer-motion";
import NavigataionItems from "./nav-items";
import ToggleButton from "./toggle-button";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const varient = {
    visible: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    hidden: {
      clipPath: "circle(25px at 250px 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "visible" : "hidden"}
      className="absolute bottom-0 right-0 top-0 h-screen w-[300px] text-background sm:hidden"
    >
      <motion.div
        variants={varient}
        className="absolute -top-3 bottom-0 right-0 w-[300px] bg-green-300"
      />
      <NavigataionItems />
      <ToggleButton setIsOpen={setIsOpen} isOpen={isOpen} />
    </motion.div>
  );
};

export default MobileNav;
