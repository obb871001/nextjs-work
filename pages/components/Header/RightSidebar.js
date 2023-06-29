import React, { useState } from "react";
import { TbArrowNarrowRight } from "react-icons/tb";
import { BsFillSuitHeartFill } from "react-icons/bs";
import ReactStars from 'react-stars'
import Rating from "@mui/material/Rating";
import StarIcon from '@mui/icons-material/Star';
import ShareButton from './ShareButton';
import Search from "./Search";
const RightSidebar = ({ content }) => {
    const [isRightSideOpen, setIsRightSideOpen] = useState(true);
    const handleCloseSidebar = () => {
        setIsRightSideOpen(false);//隐藏右側菜單
        setShowIframe(false);
    };
    const [showIframe, setShowIframe] = useState(false);
    const [selectedGame, setSelectedGame] = useState(null);
    const handleOpenIframe = (game) => {
      setSelectedGame(game);
      setShowIframe(true);
    };
  
    const handleCloseIframe = () => {
      setSelectedGame(null);
      setShowIframe(false);
    };
    const games = [
      {
        title: "Fish Prawn Crab Spin",
        intro: "Be the top-ranked dealer!!!",
        imageUrl: "https://egslot.net/Images/GameItem/game-pic_HooheyhowliveVideo.png",
        rating: 5,
        category: "BeABanker",
        iframeUrl: "https://d29juml4m9n88c.cloudfront.net/games/hooheyhowvideo/",
      },
      {
        title: "Xoc Dia Spin",
        intro: "Winner takes all!!!",
        imageUrl: "https://egslot.net/Images/GameItem/game-pic_XocdiaVideo.png",
        rating: 4.5,
        category: "BeABanker",
        iframeUrl: "https://d29juml4m9n88c.cloudfront.net/games/xocdiavideo/",
      },
      {
        title: "Sic Bo Spin",
        intro: "Win in your hands!!!",
        imageUrl: "https://egslot.net/Images/GameItem/game-pic_SicboVideo.png",
        rating: 4.5,
        category: "BeABanker",
        iframeUrl: "https://d29juml4m9n88c.cloudfront.net/games/sicbovideo/",
      },
      {
        title: "Treasure King",
        intro: "Can you beat the monsters?",
        imageUrl: "https://egslot.net/Images/GameItem/game-pic_TreasureKing.png",
        rating: 5,
        category: "Fishing",
        iframeUrl: "https://game.helloholyfa.com/fishing/treasureking/?lang=eng",
      },
    ];

  return (
    <>
      {isRightSideOpen && (
    <div className="right-sidebar fixed h-full right-0 top-0 z-[9999] bg-rightsidebar-color w-[25%] px-6 py-4 
    max-[1024px]:w-full max-[1024px]:bg-[#9a47bb]">
        <TbArrowNarrowRight 
        onClick={handleCloseSidebar} 
        className="text-white text-4xl cursor-pointer"
        />
      
      {/* <Search/> */}
      <h2 className="title-font mb-2 text-xl py-2 text-white">{content}</h2>
      <div className=" flex flex-col items-center justify-center px-2">
      
      {content === "HotGame" ? (
        games.map((game, index) => (
          <div
            key={index}
            className="flex items-start justify-start bg-[#d4b3e2] p-3 rounded-lg w-full max-w-[350px] cursor-pointer my-1"
            onClick={() => handleOpenIframe(game)}
          >
            <div className="mr-1">
              <img
              src={game.imageUrl}
              alt=""
              className="w-[80px] h-[80px] rounded-lg"
            />
            </div>
            <div className="flex items-start justify-start mx-1">
              <div className="text-left">
                <div className="gameTitle text-xl title-font-bold">
                  {game.title}
                  </div>
                  <div className="gameIntro text-sm">{game.intro}</div>
                  <div className="star mt-1">
                    <Rating
                    style={{ fontSize: "20px", color: "#fee301" }}
                    name="half-rating-read"
                    defaultValue={game.rating}
                    precision={0.5}
                    readOnly
                    emptyIcon={<StarIcon style={{ opacity: 1 }} fontSize="inherit" />}
                    />
                  </div>
                </div>
              </div>
          </div>
        ))
        ) : (
        games
          .filter((game) => game.category === content)
            .map((game, index) => (
              <div
                key={index}
                className="flex items-start justify-start bg-[#d4b3e2] p-3 rounded-lg w-full max-w-[350px] cursor-pointer my-1"
                onClick={() => handleOpenIframe(game)}
              >
                <div className="mr-1">
                  <img
                  src={game.imageUrl}
                  alt=""
                  className="w-[80px] h-[80px] rounded-lg"
                  />
                </div>
                <div className="flex items-start justify-start mx-1">
                  <div className="text-left">
                    <div className="gameTitle text-xl title-font-bold">
                      {game.title}
                    </div>
                    <div className="gameIntro text-sm">{game.intro}</div>
                    <div className="star mt-1">
                      <Rating
                      style={{ fontSize: "20px", color: "#fee301" }}
                      name="half-rating-read"
                      defaultValue={game.rating}
                      precision={0.5}
                      readOnly
                      emptyIcon={<StarIcon style={{ opacity: 1 }} fontSize="inherit" />}
                      />
                      </div>
                    </div>
                  </div>
              </div>
            ))
          )}
          <ShareButton />
      </div>
    </div>
    )}
    {showIframe && (
      <div className="fixed w-full h-full top-0 z-[99999]">
        <div className="absolute top-0 right-0 p-2">
          <button onClick={handleCloseIframe} className="text-white text-4xl">
            &#10006;
          </button>
        </div>
        <iframe src={selectedGame?.iframeUrl} className="w-full h-full" />
      </div>
    )}
    
  </>
  );
};

export default RightSidebar;