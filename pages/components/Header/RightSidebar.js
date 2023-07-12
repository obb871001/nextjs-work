import React, { useState, useRef, useEffect } from "react";
import { TbArrowNarrowRight } from "react-icons/tb";
import { BsFillSuitHeartFill } from "react-icons/bs";
import ReactStars from "react-stars";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { SlSizeFullscreen, SlClose, SlSizeActual } from "react-icons/sl";
import ShareButton from "./ShareButton";
import Search from "./Search";
import NoticeScroll from "../NoticeScroll/noticeScroll";
const RightSidebar = ({ content, onClose }) => {
  const isBrowser = typeof window !== "undefined";
  const [isRightSideOpen, setIsRightSideOpen] = useState(true);
  const [showIframe, setShowIframe] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);
  const [showNotice, setShowNotice] = useState(false);
  const [initialHeight, setInitialHeight] = useState(
    isBrowser ? window.innerHeight : 0
  );
  const [windowWidth, setWindowWidth] = useState(
    isBrowser ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > window.innerHeight) {
        setShowNotice(true);
      } else {
        setShowNotice(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth, showIframe]);

  useEffect(() => {
    const handleOrientationChange = () => {
      setTimeout(() => {
        if (window.innerWidth > window.innerHeight) {
          setShowNotice(true);
        } else {
          setShowNotice(false);
        }
      }, 200);
    };

    window.addEventListener("orientationchange", handleOrientationChange);

    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange);
    };
  }, [windowWidth, initialHeight]);

  const handleCloseSidebar = () => {
    onClose(); // 调用父组件传递的关闭事件处理程序
    setIsRightSideOpen(false); //隐藏右側菜單
    setShowIframe(false);
  };
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
      imageUrl:
        "https://egslot.net/Images/GameItem/game-pic_HooheyhowliveVideo.webp",
      rating: 5,
      category: "BeABanker",
      iframeUrl:
        "https://d29juml4m9n88c.cloudfront.net/games/hooheyhowvideo/?lang=en",
    },
    {
      title: "Xoc Dia Spin",
      intro: "Winner takes all!!!",
      imageUrl: "https://egslot.net/Images/GameItem/game-pic_XocdiaVideo3.webp",
      rating: 4.5,
      category: "BeABanker",
      iframeUrl:
        "https://d29juml4m9n88c.cloudfront.net/games/xocdiavideo/?lang=en",
    },
    {
      title: "Sic Bo Spin",
      intro: "Win in your hands!!!",
      imageUrl: "https://egslot.net/Images/GameItem/game-pic_SicboVideo.webp",
      rating: 4.5,
      category: "BeABanker",
      iframeUrl:
        "https://d29juml4m9n88c.cloudfront.net/games/sicbovideo/?lang=en",
    },
    {
      title: "Treasure King",
      intro: "Can you beat the monsters?",
      imageUrl: "https://egslot.net/Images/GameItem/game-pic_TreasureKing.webp",
      rating: 5,
      category: "Fishing",
      iframeUrl: "https://game.helloholyfa.com/fishing/treasureking/?lang=eng",
    },
    {
      title: "BlastX",
      intro: "Receive rewards before the rocket takes off!",
      imageUrl: "https://egslot.net/Images/GameItem/game-pic_GameIcon_BlastX.webp",
      rating: 5,
      category: "Blockchain Games",
      iframeUrl: "https://game.helloholyfa.com/fishing/treasureking/?lang=eng",
    },
    {
      title: "Plinko",
      intro: "Hoping ball lands in the highest payout slot!",
      imageUrl: "https://egslot.net/Images/GameItem/game-pic_GameIcon_Plinko.webp",
      rating: 4,
      category: "Blockchain Games",
      iframeUrl: "https://game.helloholyfa.com/fishing/treasureking/?lang=eng",
    },
    {
      title: "HiLo",
      intro: "Embrace the thrilling moment of flipping cards!",
      imageUrl: "https://egslot.net/Images/GameItem/game-pic_GameIcon_HiLo.webp",
      rating: 5,
      category: "Blockchain Games",
      iframeUrl: "https://game.helloholyfa.com/fishing/treasureking/?lang=eng",
    },
  ];
  const iframeRef = useRef(null);

  const handleFullScreen = () => {
    if (iframeRef.current) {
      if (iframeRef.current.requestFullscreen) {
        iframeRef.current.requestFullscreen();
      } else if (iframeRef.current.mozRequestFullScreen) {
        iframeRef.current.mozRequestFullScreen();
      } else if (iframeRef.current.webkitRequestFullscreen) {
        iframeRef.current.webkitRequestFullscreen();
      } else if (iframeRef.current.msRequestFullscreen) {
        iframeRef.current.msRequestFullscreen();
      } else if (iframeRef.current.webkitEnterFullscreen) {
        iframeRef.current.webkitEnterFullscreen();
      } else if (iframeRef.current.webkitEnterFullScreen) {
        iframeRef.current.webkitEnterFullScreen();
      } else if (iframeRef.current.msEnterFullscreen) {
        iframeRef.current.msEnterFullscreen();
      } else if (iframeRef.current.msEnterFullScreen) {
        iframeRef.current.msEnterFullScreen();
      } else if (iframeRef.current.mozEnterFullscreen) {
        iframeRef.current.mozEnterFullscreen();
      } else if (iframeRef.current.mozEnterFullScreen) {
        iframeRef.current.mozEnterFullScreen();
      } else {
        // Fullscreen API is not supported
        console.log("Fullscreen API is not supported.");
      }
    }
  };
  return (
    <>
      {isRightSideOpen && (
        <div
          className="right-sidebar fixed h-full right-0 top-0 z-[9999] bg-rightsidebar-color w-[25%] px-6 py-4 
    max-[1024px]:w-full max-[1024px]:bg-[#9a47bb]"
        >
          <TbArrowNarrowRight
            onClick={handleCloseSidebar}
            className="text-white text-4xl cursor-pointer"
          />

          {/* <Search/> */}
          <h2 className="title-font mb-2 text-xl py-2 text-white">{content}</h2>
          <div className=" flex flex-col items-center justify-center px-2">
            {content === "HotGame"
              ? games.map((game, index) => (
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
                            emptyIcon={
                              <StarIcon
                                style={{ opacity: 1 }}
                                fontSize="inherit"
                              />
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              : games
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
                              emptyIcon={
                                <StarIcon
                                  style={{ opacity: 1 }}
                                  fontSize="inherit"
                                />
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
            <ShareButton />
          </div>
        </div>
      )}
      {showIframe && (
        <div className="fixed w-full h-full top-0 z-[99999]">
          {showNotice && <NoticeScroll onlyPortrait />}
          <div className="absolute top-0 right-0 p-2">
            <button onClick={handleCloseIframe} className="text-white text-4xl">
              <SlClose className="text-white text-4xl bg-[#00000057]" />
            </button>
          </div>
          <div className="absolute bottom-0 right-0 p-2">
            <button onClick={handleFullScreen} className="text-white text-4xl">
              <SlSizeFullscreen className="text-white text-4xl bg-[#00000057]" />
            </button>
          </div>
          <iframe
            ref={iframeRef}
            src={selectedGame?.iframeUrl}
            className="w-full h-full"
          />
        </div>
      )}
    </>
  );
};

export default RightSidebar;
