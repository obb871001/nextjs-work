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
import { CgMenuLeft } from "react-icons/cg";
const NavbarMenuList = () => {
  const [more, setMore] = useState();
  const router = useRouter();
  
  return (
    <AnimatePresence>
        <div className="absolute mt-[30%] flex flex-col items-center justify-center h-full">
            
            <section className="h-full w-full flex flex-col items-center justify-center">
                <div class="navigation-body">
                    <div class="navigation-group-wrap">
                        <div class="navigation-group">
                            <div class="navigation-item flex items-center">
                                <Link href="/#" className="flex items-center cursor-pointer text-base !text-dark-grey-text p-3 py-4">
                                    <AiFillHome className="text-white text-3xl"/>
                                    <div className="hover-box text-white px-4" style={{ fontFamily: 'TitleFont' }}>Home</div>
                                </Link>
                            </div>
                            <div class="navigation-item flex items-center">
                                <Link href="/#" className="flex items-center cursor-pointer text-base !text-dark-grey-text p-3 py-4">
                                    <BsFire className="text-white text-3xl"/>
                                    <div className="hover-box text-white px-4" style={{ fontFamily: 'TitleFont' }}>Hot</div>
                                </Link>
                            </div>
                            <div class="navigation-item flex items-center">
                                <Link href="/#" className="flex items-center cursor-pointer text-base !text-dark-grey-text p-3 py-4">
                                    <AiFillHeart className="text-white text-3xl"/>
                                    <div className="hover-box text-white px-4" style={{ fontFamily: 'TitleFont' }}>Favorite</div>
                                </Link>
                            </div>
                            <div class="navigation-item flex items-center">
                                <Link href="/#" className="flex items-center cursor-pointer text-base !text-dark-grey-text p-3 py-4">
                                    <TbSquareRoundedNumber7Filled className="text-white text-3xl"/>
                                    <div className="hover-box text-white px-4" style={{ fontFamily: 'TitleFont' }}>Slot</div>
                                </Link>
                            </div>
                            <div class="navigation-item flex items-center">
                                <Link href="/#" className="flex items-center cursor-pointer text-base !text-dark-grey-text p-3 py-4">
                                    <BsDice5Fill className="text-white text-3xl"/>
                                    <div className="hover-box text-white px-4" style={{ fontFamily: 'TitleFont' }}>BeABanker</div>
                                </Link>
                            </div>
                            <div class="navigation-item flex items-center">
                                <Link href="/#" className="flex items-center cursor-pointer text-base !text-dark-grey-text p-3 py-4">
                                    <FaFish className="text-white text-3xl"/>
                                    <div className="hover-box text-white px-4" style={{ fontFamily: 'TitleFont' }}>Fish</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </AnimatePresence>
  );
};

export default NavbarMenuList;