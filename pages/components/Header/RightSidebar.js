import React, { useState } from "react";
import { TbArrowNarrowRight } from "react-icons/tb";
import Search from "./Search";
const RightSidebar = ({ content }) => {
    const [isRightSideOpen, setIsRightSideOpen] = useState(true);
    const handleCloseSidebar = () => {
        setIsRightSideOpen(false);//隐藏右側菜單
    };

  return (
    <>
      {isRightSideOpen && (
    <div className="right-sidebar fixed h-full right-0 top-o z-[99999] bg-rightsidebar-color w-[25%] px-6 py-4">
        <TbArrowNarrowRight 
        onClick={handleCloseSidebar} 
        className="text-white text-4xl cursor-pointer"
        />
      
      <Search/>
      <h2>{content}</h2>
    </div>
    )}
    </>
  );
};

export default RightSidebar;