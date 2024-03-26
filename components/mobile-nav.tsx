import { navItems } from "@/constants";
import { motion } from "framer-motion";
import Link from "next/link";

const MobileNav = () => {
  return (
    <motion.div
      className="absolute right-0 w-48 bg-white"
      initial={{ x: 200 }}
      animate={{ x: 1 }}
      exit={{ x: 200 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div className="h-screen">
        <ul className="flex h-full w-full flex-col items-center justify-center space-y-4 text-background">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="font-proximaNova text-lg font-bold uppercase"
            >
              <Link href={item.href}>{item.item}</Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default MobileNav;
