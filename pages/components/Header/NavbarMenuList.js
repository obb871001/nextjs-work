import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import React, { useState, useRef, useEffect } from "react";
import { TfiClose } from "react-icons/tfi";
import { CONTACT_LIST } from "@/constants";
import Link from "next/link";
import RightSidebar from "./RightSidebar";
import Search from "./Search";
import { AiFillHome, AiFillHeart } from "react-icons/ai";
import { BsFire, BsDice5Fill } from "react-icons/bs";
import { FaFish } from "react-icons/fa";
import { SiBlockchaindotcom } from "react-icons/si";
import { TbSquareRoundedNumber7Filled } from "react-icons/tb";
import { CgMenu, CgMenuLeft } from "react-icons/cg";
const NavbarMenuList = () => {
  const menuRef = useRef(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isRightSidebarOpen, setRightSidebarOpen] = useState(false); // 添加状态用于控制右侧菜单的显示和隐藏
  const router = useRouter();
  const menuItems = [
    { title: "About", href: "/About" },
    // { title: "News", href: "/News" },
    // { title: "Media", href: "/Media" },
    // { title: "Collaborate", href: "/Collaborate" },
    { title: "Service", href: "/Service" },
  ];
  const navigationItems = [
    {
      icon: <AiFillHome className="text-white text-3xl hover:!text-light-yellow-text" />,
      id: "Home",
      label: "Home",
      href: "/#",
      onClick: () => { 
        setMenuOpen(false);// 關閉左側選單
        handleItemClick(null); // 不顯示右側選單，整頁跳轉
      },
    },
    {
      icon: <BsFire className="text-white text-3xl hover:!text-light-yellow-text" />,
      id: "HotGame",
      label: "Hot",
      href: "/HotGame",
      onClick: (event) => {
        event.preventDefault(); // 阻止默認的頁面導航行為
        handleItemClick("HotGame"); // 顯示右側選單，內容為「熱門遊戲」
      },
    },
    // {
    //   icon: <AiFillHeart className="text-white text-3xl hover:!text-light-yellow-text" />,
    //   id: "Favorite",
    //   label: "Favorite",
    //   href: "/#",
    //   onClick: (event) => {
    //     event.preventDefault();
    //     handleItemClick("Favorite");
    //   },
    // },
    // {
    //   icon: <TbSquareRoundedNumber7Filled className="text-white text-3xl hover:!text-light-yellow-text" />,
    //   id: "Slot",
    //   label: "Slot",
    //   href: "/#",
    //   onClick: (event) => {
    //     event.preventDefault();
    //     handleItemClick("Slot");
    //   },
    // },
    {
      icon: <BsDice5Fill className="text-white text-3xl hover:!text-light-yellow-text" />,
      id: "BeABanker",
      label: "BeABanker",
      href: "/#",
      onClick: (event) => {
        event.preventDefault(); 
        handleItemClick("BeABanker"); 
      },
    },
    {
      icon: <FaFish className="text-white text-3xl hover:!text-light-yellow-text" />,
      id: "Fishing",
      label: "Fishing",
      href: "/#",
      onClick: (event) => {
        event.preventDefault(); 
        handleItemClick("Fishing");
      },
    },
    {
      icon: <SiBlockchaindotcom className="text-white text-3xl hover:!text-light-yellow-text" />,
      id: "Blockchain",
      label: "Blockchain Games",
      href: "/#",
      onClick: (event) => {
        event.preventDefault(); 
        handleItemClick("Blockchain Games");
      },
    },
  ];
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const handleItemClick = (itemId) => {
    if (itemId === selectedItem) {
      setSelectedItem(null);
      setRightSidebarOpen(false); // 关闭右侧菜单
    } else {
      setSelectedItem(itemId);
      setRightSidebarOpen(true); // 打开右侧菜单
    }
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <AnimatePresence>
      <motion.section
          initial={{ opacity: 0, visibility: "visible" }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
        <div className={`fixed h-full left-0 top-0 z-10 w-[12%] max-[1024px]:z-[9999] 
        ${isMenuOpen ? 'max-[1024px]:w-[70%]' : 'max-[1024px]:w-[20%]'} 
        ${isMenuOpen ? 'max-[1024px]:h-full' : 'max-[1024px]:h-auto'}`}
        style={{
          backgroundColor: isMenuOpen ? "#411f51f2" : "transparent",
          boxShadow: isMenuOpen ? "2px 2px 2px rgba(20%,20%,40%,0.6),4px 4px 6px rgba(20%,20%,40%,0.4),6px 6px 12px rgba(20%,20%,40%,0.4)" : "unset"
        }}
        ref={menuRef}>
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
                className={`absolute top-0 left-0 flex flex-col items-center justify-center w-full mt-40 max-[1024px]:mt-[68px] ${isMenuOpen ? 'max-[1024px]:block' : 'max-[1024px]:hidden'}`}
            >
                <section className="h-full w-full flex flex-col items-center justify-center">
                  <div className="navigation-body max-[1024px]:w-full">
                      <div className="navigation-group-wrap w-full">
                        <div className="navigation-group flex flex-col items-start justify-start">
                            {navigationItems.map((item, index) => (
                              <div key={item.id} className="navigation-item flex items-center">
                                <Link 
                                href={item.href} 
                                passHref>
                                  <div 
                                  onClick={item.onClick} 
                                  className={`flex w-full items-center cursor-pointer text-base !text-dark-grey-text 
                                  ${isMenuOpen ? "px-10 py-4" : "p-4"}`}
                                  >
                                        {item.icon}
                                        {isMenuOpen && (
                                            <div
                                            className="title-font hover-box text-white px-4">
                                            {item.label}
                                            </div>
                                        )}
                                    </div>
                                </Link>
                              </div>
                            ))}
                            <div className="title-font bg-black text-white flex w-full items-center text-base min-[1024px]:hidden">
                              <div className={`navigation-item flex flex-col items-start justify-start w-full px-4 py-2 ${isMenuOpen ? "px-10 py-4" : "p-4"}`}>
                                {menuItems.map((menuItem) => (
                                  <Link key={menuItem.title} href={menuItem.href} className="w-full">
                                    <div className={`title-font text-white px-4 py-2 flex w-full items-center cursor-pointer text-base 
                                    ${isMenuOpen ? "px-10 py-4" : "p-4"}`}>
                                      {menuItem.title}
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                        </div>
                      </div>
                  </div>
                </section>
            </div>
            
      </div>
      </motion.section>
      {selectedItem && isRightSidebarOpen && ( // 仅当右侧菜单打开且有选定项时才显示右侧菜单
        <>
          <RightSidebar
            content={selectedItem}
            onClose={() => setRightSidebarOpen(false)} // 关闭右侧菜单的事件处理程序
          />
          {/* <Search content={selectedItem} /> */}
        </>
      )}
    </AnimatePresence>
  );
};

export default NavbarMenuList;