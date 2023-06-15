import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { TfiClose } from "react-icons/tfi";
import {
  VscChevronDown,
  VscChevronRight,
  VscChevronTop,
} from "react-icons/vsc";
import { CONTACT_LIST } from "@/constants";
import Link from "next/link";
import { AiFillHome, AiFillHeart,  } from "react-icons/ai";
import { BsFire, BsDice5Fill } from "react-icons/bs";
import { FaFish } from "react-icons/fa";
import { TbSquareRoundedNumber7Filled } from "react-icons/tb";
import { CgMenu, CgMenuLeft } from "react-icons/cg";
const NavbarMenuList = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const navigationItems = [
    {
      icon: <AiFillHome className="text-white text-3xl" />,
      label: "Home",
      href: "/#",
    },
    {
      icon: <BsFire className="text-white text-3xl" />,
      label: "Hot",
      href: "/HotGame",
    },
    {
      icon: <AiFillHeart className="text-white text-3xl" />,
      label: "Favorite",
      href: "/#",
    },
    {
      icon: <TbSquareRoundedNumber7Filled className="text-white text-3xl" />,
      label: "Slot",
      href: "/#",
    },
    {
      icon: <BsDice5Fill className="text-white text-3xl" />,
      label: "BeABanker",
      href: "/#",
    },
    {
      icon: <FaFish className="text-white text-3xl" />,
      label: "Fish",
      href: "/#",
    },
  ];
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <AnimatePresence>
        <div className="fixed h-full left-0 top-0 z-10 w-[12%]"
        style={{ backgroundColor: isMenuOpen ? "#411f51" : "transparent" }}>
            <div className="flex items-center justify-center p-4">
                {isMenuOpen ? (
                    <CgMenu
                        onClick={toggleMenu}
                        className="text-white text-4xl cursor-pointer"
                    />
                    ) : (
                    <CgMenuLeft
                        onClick={toggleMenu}
                        className="text-white text-4xl cursor-pointer"
                    />
                )}
            </div>
            <div
                className={`absolute top-0 left-0 flex flex-col items-center justify-center w-full mt-40`}
                
            >
                <section className="h-full w-full flex flex-col items-center justify-center">
                <div className="navigation-body">
                    <div className="navigation-group-wrap">
                    <div className="navigation-group flex flex-col items-start justify-start">
                        {navigationItems.map((item, index) => (
                        <div key={index} className="navigation-item flex items-center">
                        <Link href={item.href} passHref className={`flex items-center cursor-pointer text-base !text-dark-grey-text 
                        ${isMenuOpen ? "px-10 py-4" : "p-4"}`
                        }>
                                {item.icon}
                                {isMenuOpen && (
                                    <div
                                    className="hover-box text-white px-4"
                                    style={{ fontFamily: "TitleFont" }}
                                    >
                                    {item.label}
                                    </div>
                                )}
                            </Link>
                        </div>
                        ))}
                    </div>
                    </div>
                </div>
                </section>
            </div>
      </div>
    </AnimatePresence>
  );
};

export default NavbarMenuList;