import { motion } from "framer-motion";
import ListItem from "./list-item";
import { navItems } from "@/constants";

const NavigataionItems = () => {
  const variants = {
    visible: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    hidden: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  return (
    <motion.ul
      className="flex h-full flex-col items-center justify-center space-y-6"
      variants={variants}
    >
      {navItems.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </motion.ul>
  );
};

export default NavigataionItems;
