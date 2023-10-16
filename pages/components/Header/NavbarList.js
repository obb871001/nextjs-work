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
import { AiFillHome, AiOutlineGlobal } from "react-icons/ai";
import { BsDice5Fill, BsFire } from "react-icons/bs";
import { FaFish } from "react-icons/fa";
import { RiMovieFill } from "react-icons/ri";
import { SiBlockchaindotcom } from "react-icons/si";
import ChangeTranslate from "../ChangeTranslate/ChangeTranslate";
import { useLanguageQuery, useTranslation } from "next-export-i18n";

const NavbarList = ({ openNav, setOpenNav }) => {
  const { t } = useTranslation();
  const i18nCommon = (key) => t(`common.${key}`);
  const i18nNavbar = (key) => t(`navbar.${key}`);

  const [more, setMore] = useState();
  const router = useRouter();

  const [query] = useLanguageQuery();

  const variant = {
    hidden: {
      x: "100%",
      opacity: 1,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };
  const navigationItems = [
    {
      icon: <AiFillHome />,
      id: "Home",
      main: "Home",
      href: `/`,
      onClick: () => {
        setMenuOpen(false); // 關閉左側選單
        handleItemClick(null); // 不顯示右側選單，整頁跳轉
      },
    },
    {
      icon: <BsFire />,
      id: "SlotGames",
      main: "Slot Games",
      href: "/type/slot",
      onClick: (event) => {
        event.preventDefault(); // 阻止默認的頁面導航行為
        handleItemClick("HotGame"); // 顯示右側選單，內容為「熱門遊戲」
      },
    },
    {
      icon: <BsDice5Fill />,
      id: "Spin",
      main: "Spin",
      href: "/type/spin",
      onClick: (event) => {
        event.preventDefault();
        handleItemClick("BeABanker");
      },
    },
    {
      icon: <FaFish />,
      id: "Fishing",
      main: "Fishing",
      href: "/type/fishing",
      onClick: (event) => {
        event.preventDefault();
        handleItemClick("Fishing");
      },
    },
    {
      icon: <SiBlockchaindotcom />,
      id: "Blockchain",
      main: "Blockchain Games",
      href: "/type/blockchain",
      onClick: (event) => {
        event.preventDefault();
        handleItemClick("Blockchain Games");
      },
    },
    {
      icon: <RiMovieFill />,
      id: "Movie",
      main: "Movie",
      href: "/Movie",
      onClick: (event) => {
        event.preventDefault(); // 阻止默認的頁面導航行為
        handleItemClick("Movie"); // 顯示右側選單，內容為「熱門遊戲」
      },
    },
    // {
    //   icon: <AiOutlineGlobal />,
    //   id: "Language",
    //   main: "Language",
    //   components: <ChangeTranslate />,
    //   onClick: (event) => {
    //     event.preventDefault(); // 阻止默認的頁面導航行為
    //     handleItemClick("Movie"); // 顯示右側選單，內容為「熱門遊戲」
    //   },
    // },
  ];

  return (
    <AnimatePresence>
      {openNav && (
        <motion.section
          initial={{ opacity: 0, visibility: "visible" }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            setOpenNav(false);
          }}
          className="fixed flex justify-end top-0 left-0 w-screen h-screen bg-[rgb(28,29,33,0.6)]  z-[9999]"
        >
          <motion.div
            variants={variant}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="w-[90%] max-w-[460px] py-[2rem] px-[3.5rem] h-full bg-gradient-to-b from-[#120028] to-[#2C1E37] overflow-y-scroll"
          >
            <TfiClose
              onClick={() => setOpenNav(false)}
              className="text-4xl absolute text-white right-[50px] top-[40px] cursor-pointer transition duration-500 hover:rotate-180	"
            />
            <section className="h-full w-full flex flex-col items-start gap-[10px] justify-start mt-[60px]">
              {navigationItems.map((contact, index) => {
                return (
                  <section key={index} className="mb-[30px] w-full group">
                    <Link
                      key={index}
                      // href={!contact?.list ? `/${contact.link}` : ""}
                      className="flex items-center mb-[10px] cursor-pointer"
                      href={contact.href}
                      onClick={() => {
                        setOpenNav(false);
                      }}
                    >
                      <div className="flex items-center gap-[20px] group-hover:border-b-2 border-light-yellow-text mb-[3px] h-[40px]">
                        <p className="group-hover:!text-light-yellow-text text-white text-4xl">
                          {contact.icon}
                        </p>
                        <p className="group-hover:!text-light-yellow-text title-font text-2xl font-extrabold hover-box text-white px-4">
                          {i18nCommon(contact.main)}
                        </p>
                      </div>
                    </Link>
                  </section>
                );
              })}{" "}
              <section className="mb-[30px] w-full group">
                <div className="flex items-center mb-[10px] cursor-pointer">
                  <div className="flex items-center gap-[20px] group-hover:border-b-2 border-light-yellow-text mb-[3px] h-[40px]">
                    <p className="group-hover:!text-light-yellow-text text-white text-4xl">
                      <AiOutlineGlobal />
                    </p>
                    <p className="group-hover:!text-light-yellow-text title-font text-2xl font-extrabold hover-box text-white px-4">
                      <ChangeTranslate />
                    </p>
                  </div>
                </div>
              </section>
            </section>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default NavbarList;
