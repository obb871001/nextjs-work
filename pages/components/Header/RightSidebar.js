import React, { useState } from "react";
import { TbArrowNarrowRight } from "react-icons/tb";
import { BsFillSuitHeartFill } from "react-icons/bs";
import ReactStars from 'react-stars'
import Rating from "@mui/material/Rating";
import StarIcon from '@mui/icons-material/Star';
import Search from "./Search";
const RightSidebar = ({ content }) => {
    const [isRightSideOpen, setIsRightSideOpen] = useState(true);
    const handleCloseSidebar = () => {
        setIsRightSideOpen(false);//隐藏右側菜單
    };

  return (
    <>
      {isRightSideOpen && (
    <div className="right-sidebar fixed h-full right-0 top-0 z-[9999] bg-rightsidebar-color w-[25%] px-6 py-4 
    max-[640px]:w-full max-[640px]:bg-[#9a47bb]">
        <TbArrowNarrowRight 
        onClick={handleCloseSidebar} 
        className="text-white text-4xl cursor-pointer"
        />
      
      <Search/>
      <h2>{content}</h2>
      <div className=" flex flex-col items-center justify-center px-2">
        <div className="flex items-start justify-between bg-[#d4b3e2] p-3 rounded-lg w-full max-w-[350px] cursor-pointer my-1">
          <div className="mr-1">
            <img src="Images/GameItem/game-pic1.png" alt="" className="w-[80px] h-[80px] rounded-lg" />
          </div>
          <div className="flex items-start justify-between mx-1">
            <div className="text-left">
              <div className="gameTitle text-xl title-font-bold">Neko Maid</div>
              <div className="gameIntro text-sm">Race around the world!!!</div>
              <div className="star mt-1">
                <Rating 
                  style={{ fontSize: '20px', color: '#fee301' }}
                  name="half-rating-read" 
                  defaultValue={4.5} 
                  precision={0.5} 
                  readOnly 
                  emptyIcon={<StarIcon style={{ opacity: 1 }} fontSize="inherit" />}
                />
              </div>
            </div>
            <div className="ml-12">
              <BsFillSuitHeartFill 
              className="opacity-80 text-gray-500 right-[5px] icon-heart"/>
            </div>
          </div>
        </div>

        <div className="flex items-start justify-between bg-[#d4b3e2] p-3 rounded-lg w-full max-w-[350px] cursor-pointer my-1">
          <div className="mr-1">
            <img src="Images/GameItem/game-pic1.png" alt="" className="w-[80px] h-[80px] rounded-lg" />
          </div>
          <div className="flex items-start justify-between mx-1">
            <div className="text-left">
              <div className="gameTitle text-xl title-font-bold">Neko Maid</div>
              <div className="gameIntro text-sm">Race around the world!!!</div>
              <div className="star mt-1">
                <Rating 
                  style={{ fontSize: '20px', color: '#fee301' }}
                  name="half-rating-read" 
                  defaultValue={4.5} 
                  precision={0.5} 
                  readOnly 
                  emptyIcon={<StarIcon style={{ opacity: 1 }} fontSize="inherit" />}
                />
              </div>
            </div>
            <div className="ml-12">
              <BsFillSuitHeartFill 
              className="opacity-80 text-gray-500 right-[5px] icon-heart"/>
            </div>
          </div>
        </div>

      </div>
    </div>
    )}
    </>
  );
};

export default RightSidebar;