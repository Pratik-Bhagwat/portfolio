import { motion } from "framer-motion";
import Link from "next/link";

interface ListItemProps {
  item: {
    id: number;
    item: string;
    href: string;
  };
}

const ListItem = ({ item }: ListItemProps) => {
  const varients = {
    visible: {
      y: 1,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    hidden: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <motion.li
      className="font-proximaNova text-2xl uppercase text-background"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      variants={varients}
    >
      <Link href={item.href}>{item.item}</Link>
    </motion.li>
  );
};

export default ListItem;
