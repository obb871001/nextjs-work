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

const NavbarList = ({ openNav, setOpenNav }) => {
  const [more, setMore] = useState();
  const router = useRouter();
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
  return (
    <AnimatePresence>
      {openNav && (
        <motion.section
          initial={{ opacity: 0, visibility: "visible" }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 w-screen h-screen bg-[rgb(28,29,33,0.6)]  z-[9999]"
        >
          <motion.div
            variants={variant}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed right-0 top-0 w-[90%] max-w-[460px] py-[2rem] px-[3.5rem] h-full bg-[rgba(238,238,238,0.9)]"
          >
            <TfiClose
              onClick={() => setOpenNav(false)}
              className="text-3xl absolute right-[50px] top-[40px] cursor-pointer transition duration-500 hover:rotate-180	"
            />
            <section className="h-full w-full flex flex-col items-center justify-center">
              {CONTACT_LIST.map((contact, index) => {
                return (
                  <section key={index} className="mb-[30px]">
                    <div
                      key={index}
                      // href={!contact?.list ? `/${contact.link}` : ""}
                      className="flex items-center border-b-2 border-gray-500 mb-[10px] cursor-pointer"
                      onClick={() => {
                        if (contact?.list) {
                          if (more === index) {
                            setMore();
                          } else {
                            setMore(index);
                          }
                        } else {
                          router.push(`/${contact.link}`);
                          return;
                        }
                      }}
                    >
                      <p className="text-[1.3rem] leading-[40px] font-normal">
                        {contact.main}
                      </p>
                      {contact?.list && (
                        <>
                          <VscChevronDown
                            className={`${
                              more === index && "rotate-180"
                            } transition duration-300 text-red-500 ml-[10px] text-3xl`}
                          />
                        </>
                      )}
                    </div>
                    {contact?.list && (
                      <div>
                        {more === index &&
                          contact.list.map((list, index) => {
                            return (
                              <Link
                                key={index}
                                className="cursor-pointer group flex items-center justify-center mb-[10px]"
                                href={`/${list.link}`}
                              >
                                <VscChevronRight className="text-red-500 group-hover:opacity-100 opacity-0 transition duration-300" />
                                <p
                                  key={index}
                                  className="text-center mb-[0px] group-hover:translate-x-[7px] group-hover:text-red-500 transition duration-300"
                                >
                                  {list.text}
                                </p>
                              </Link>
                            );
                          })}
                      </div>
                    )}
                  </section>
                );
              })}
            </section>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default NavbarList;
