import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { TfiClose } from "react-icons/tfi";
import { CONTACT_LIST } from "@/constants";
import Link from "next/link";
import RightSidebar from "./RightSidebar";
import { AiFillHome, AiFillHeart } from "react-icons/ai";
import { BsFire, BsDice5Fill } from "react-icons/bs";
import { FaFish } from "react-icons/fa";
import { TbSquareRoundedNumber7Filled } from "react-icons/tb";
import { CgMenu, CgMenuLeft } from "react-icons/cg";
const NavbarMenuList = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const navigationItems = [
    {
      icon: <AiFillHome className="text-white text-3xl" />,
      id: "Home",
      label: "Home",
      href: "/#",
      onClick: () => handleItemClick(null), // 不顯示右側選單，整頁跳轉
    },
    {
      icon: <BsFire className="text-white text-3xl" />,
      id: "HotGame",
      label: "Hot",
      href: "/HotGame",
      onClick: (event) => {
        event.preventDefault(); // 阻止默認的頁面導航行為
        handleItemClick("HotGame"); // 顯示右側選單，內容為「熱門遊戲」
      },
    },
    {
      icon: <AiFillHeart className="text-white text-3xl" />,
      id: "Favorite",
      label: "Favorite",
      href: "/#",
      onClick: (event) => {
        event.preventDefault(); // 阻止默認的頁面導航行為
        handleItemClick("Favorite"); // 顯示右側選單，內容為「熱門遊戲」
      },
    },
    {
      icon: <TbSquareRoundedNumber7Filled className="text-white text-3xl" />,
      id: "Slot",
      label: "Slot",
      href: "/#",
      onClick: () => handleItemClick(null), // 不顯示右側選單，整頁跳轉
    },
    {
      icon: <BsDice5Fill className="text-white text-3xl" />,
      id: "BeABanker",
      label: "BeABanker",
      href: "/#",
      onClick: () => handleItemClick(null), // 不顯示右側選單，整頁跳轉
    },
    {
      icon: <FaFish className="text-white text-3xl" />,
      id: "Fish",
      label: "Fish",
      href: "/#",
      onClick: () => handleItemClick(null), // 不顯示右側選單，整頁跳轉
    },
  ];
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const handleItemClick = (itemId) => {
    if (itemId === selectedItem) {
      setSelectedItem(null);
    } else {
      setSelectedItem(itemId);
    }
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
                className={`absolute top-0 left-0 flex flex-col items-center justify-center w-full mt-40 max-[640px]:hidden`}
                
            >
                <section className="h-full w-full flex flex-col items-center justify-center">
                  <div className="navigation-body">
                      <div className="navigation-group-wrap">
                        <div className="navigation-group flex flex-col items-start justify-start">
                            {navigationItems.map((item, index) => (
                              <div key={index} className="navigation-item flex items-center">
                                <Link 
                                href={item.href} 
                                passHref>
                                  <div 
                                  onClick={item.onClick} 
                                  className={`flex items-center cursor-pointer text-base !text-dark-grey-text 
                                  ${isMenuOpen ? "px-10 py-4" : "p-4"}`}
                                  >
                                        {item.icon}
                                        {isMenuOpen && (
                                            <div
                                            className="hover-box text-white px-4"
                                            style={{ fontFamily: "TitleFont" }}
                                            >
                                            {item.label}
                                            </div>
                                        )}
                                    </div>
                                </Link>
                              </div>
                            ))}
                        </div>
                      </div>
                  </div>
                </section>
            </div>
            
      </div>
      {selectedItem && (
        <RightSidebar content={selectedItem} handleCloseSidebar={() => setSelectedItem(null)} />
      )}
    </AnimatePresence>
  );
};

export default NavbarMenuList;