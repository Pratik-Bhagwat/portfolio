"use client";

import { navItems } from "@/constants";
import Wrapper from "./wrapper";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import githubSVG from "@/assets/svgs/RiGithubFill.svg";
import linkedInSVG from "@/assets/svgs/RiLinkedinBoxFill.svg";
import MobileNav from "./mobile-nav";

const Navbar = () => {
  const [isSelected, setIsSelected] = useState("");

  return (
    <header className="fixed inset-0 z-10 h-14 bg-opacity-40 backdrop-blur-lg backdrop-filter">
      <Wrapper className="relative py-3">
        <nav className="flex items-center justify-between">
          <h4 className="font-avanGarde text-xl lg:text-2xl">
            <Link href="/">Portfolio</Link>
          </h4>
          <ul
            className="hidden items-center
justify-center sm:flex sm:space-x-4 md:space-x-10"
          >
            {navItems.map((item) => (
              <Link href={item.href} key={item.id}>
                <li
                  onClick={() => setIsSelected(item.item)}
                  className="group relative whitespace-nowrap font-proximaNova font-bold uppercase sm:text-[0.8rem] lg:text-sm"
                >
                  {item.item}
                  {isSelected === item.item ? (
                    <div className="h-1 w-full rounded-full bg-specialText" />
                  ) : (
                    <div className="h-1 w-full scale-x-0 rounded-full bg-specialText transition-all duration-500 group-hover:scale-x-100" />
                  )}
                </li>
              </Link>
            ))}
          </ul>
          <div className="hidden items-center space-x-3 sm:flex">
            <Link href="https://www.linkedin.com/in/pratik-bhagwat-dev/">
              {/* <LucideLinkedin className="sm:size-4 lg:size-6" /> */}
              <Image
                src={linkedInSVG}
                alt="linkedin svg"
                className="sm:size-4 lg:size-6"
              />
            </Link>
            <Link href="https://github.com/Pratik-Bhagwat">
              {/* <GithubIcon className="sm:size-4 lg:size-6" /> */}
              <Image
                src={githubSVG}
                alt="github svg"
                className="sm:size-4 lg:size-6"
              />
            </Link>
          </div>
          <MobileNav />
        </nav>
      </Wrapper>
    </header>
  );
};

export default Navbar;
