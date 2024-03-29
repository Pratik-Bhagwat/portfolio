import hamburgerSVG from "@/assets/svgs/CiMenuAlt01.svg";
import closeSVG from "@/assets/svgs/CiCloseBig.svg";
import Image from "next/image";
import { SetStateAction } from "react";

interface ToggleButtonProps {
  setIsOpen: React.Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}

const ToggleButton = ({ setIsOpen, isOpen }: ToggleButtonProps) => {
  return (
    <button
      className="absolute right-4 top-1 size-12 cursor-pointer rounded-full border-none bg-transparent outline-none"
      onClick={() => setIsOpen(() => !isOpen)}
    >
      <Image
        src={isOpen ? closeSVG : hamburgerSVG}
        alt={isOpen ? "close-icon" : "hamburger-icon"}
      />
    </button>
  );
};

export default ToggleButton;
