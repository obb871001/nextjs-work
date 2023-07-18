import React, { useState, useRef, useEffect } from "react";
import { TbArrowNarrowRight } from "react-icons/tb";
import { BsFillSuitHeartFill } from "react-icons/bs";
import YouTube from "react-youtube";
import ReactStars from "react-stars";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { SlSizeFullscreen, SlClose, SlSizeActual } from "react-icons/sl";
import ShareButton from "./ShareButton";
import Search from "./Search";
import NoticeScroll from "../NoticeScroll/noticeScroll";
import { useTranslation } from "next-export-i18n";
const RightSidebar = ({ content, onClose, isRightSidebarOpen }) => {
  const { t } = useTranslation();
  const i18n = (key) => t(`rightSide.${key}`);
  const i18nCommon = (key) => t(`common.${key}`);

  const isBrowser = typeof window !== "undefined";
  const [isRightSideOpen, setIsRightSideOpen] = useState(true);
  const [showIframe, setShowIframe] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);
  const [isToolbarHidden, setIsToolbarHidden] = useState(true);
  const [initialHeight, setInitialHeight] = useState(
    isBrowser ? window.innerHeight : 0
  );
  const [windowWidth, setWindowWidth] = useState(
    isBrowser ? window.innerWidth : 0
  );
  const [isPortrait, setIsPortrait] = useState(
    isBrowser ? window.innerWidth < window.innerHeight : true
  );
  const [defaultHeight, setDefaultHeight] = useState(
    isBrowser && isPortrait ? window.innerWidth - 20 : 0
  );

  useEffect(() => {
    const handleResize = () => {
      const isCurrentlyPortrait = window.innerHeight > window.innerWidth;
      setIsPortrait(isCurrentlyPortrait);
      setWindowWidth(window.innerWidth);

      if (isCurrentlyPortrait) {
        setDefaultHeight(window.innerWidth - 20);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    if (showIframe && window.innerWidth > window.innerHeight) {
      const handleResize = () => {
        setInitialHeight(window.innerHeight);
        setIsToolbarHidden(window.innerHeight >= defaultHeight);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    } else {
      setIsToolbarHidden(true);
    }
  }, [initialHeight, showIframe, windowWidth, defaultHeight]);

  useEffect(() => {
    const handleOrientationChange = () => {
      setTimeout(() => {
        if (
          window.innerWidth > window.innerHeight &&
          window.innerHeight < defaultHeight
        ) {
          setIsToolbarHidden(false);
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
      title: i18n("WitchsLove.title"),
      intro: i18n("WitchsLove.intro"),
      imageUrl: "https://egslot.net/Images/GameItem/game-pic_WitchsLove.webp",
      rating: 5,
      category: i18nCommon("HotGame"),
      iframeUrl:
        "https://d29juml4m9n88c.cloudfront.net/games/witchlove/?lang=en&curr=usd&hidefps=true&useIFrame=true",
    },
    {
      title: i18n("NEKOMAID.title"),
      intro: i18n("NEKOMAID.intro"),
      imageUrl: "https://egslot.net/Images/GameItem/game-pic_NekoMaid.webp",
      rating: 5,
      category: i18nCommon("HotGame"),
      iframeUrl:
        "https://d29juml4m9n88c.cloudfront.net/games/nekomaid/?lang=en&curr=usd&hidefps=true&useIFrame=true",
    },
    {
      title: i18n("ADVENTUREOFSINBAD.title"),
      intro: i18n("ADVENTUREOFSINBAD.intro"),
      imageUrl:
        "https://egslot.net/Images/GameItem/game-pic_LegendOfSinbad.webp",
      rating: 5,
      category: i18nCommon("HotGame"),
      iframeUrl:
        "https://d29juml4m9n88c.cloudfront.net/games/adventureofsinbad/?lang=en&curr=usd&hidefps=true&useIFrame=true",
    },
    {
      title: i18n("fishPawnCrabSpin.title"),
      intro: i18n("fishPawnCrabSpin.intro"),
      imageUrl:
        "https://egslot.net/Images/GameItem/game-pic_HooheyhowliveVideo.webp",
      rating: 5,
      category: i18nCommon("BeABanker"),
      iframeUrl:
        "https://d29juml4m9n88c.cloudfront.net/games/hooheyhowvideo/?lang=en&curr=usd&useIFrame=true",
    },
    {
      title: i18n("xocDiaSpin.title"),
      intro: i18n("xocDiaSpin.intro"),
      imageUrl: "https://egslot.net/Images/GameItem/game-pic_XocdiaVideo3.webp",
      rating: 4.5,
      category: i18nCommon("BeABanker"),
      iframeUrl:
        "https://d29juml4m9n88c.cloudfront.net/games/xocdiavideo/?lang=en&curr=usd&useIFrame=true",
    },
    {
      title: i18n("sicBoSpin.title"),
      intro: i18n("sicBoSpin.intro"),
      imageUrl: "https://egslot.net/Images/GameItem/game-pic_SicboVideo.webp",
      rating: 4.5,
      category: i18nCommon("BeABanker"),
      iframeUrl:
        "https://d29juml4m9n88c.cloudfront.net/games/sicbovideo/?lang=en&curr=usd&useIFrame=true",
    },
    {
      title: i18n("treasureKing.title"),
      intro: i18n("treasureKing.intro"),
      imageUrl: "https://egslot.net/Images/GameItem/game-pic_TreasureKing.webp",
      rating: 5,
      category: i18nCommon("Fishing"),
      iframeUrl:
        "https://d29juml4m9n88c.cloudfront.net/games/treasureking/?lang=en&curr=usd&useIFrame=true",
    },
    {
      title: i18n("blastX.title"),
      intro: i18n("blastX.intro"),
      imageUrl:
        "https://egslot.net/Images/GameItem/game-pic_GameIcon_BlastX.webp",
      rating: 5,
      category: i18nCommon("Blockchain Games"),
      iframeUrl:
        "https://d29juml4m9n88c.cloudfront.net/games/blastxp/?lang=en&curr=usd&useIFrame=true",
    },
    {
      title: i18n("plinko.title"),
      intro: i18n("plinko.intro"),
      imageUrl:
        "https://egslot.net/Images/GameItem/game-pic_GameIcon_Plinko.webp",
      rating: 4,
      category: i18nCommon("Blockchain Games"),
      iframeUrl:
        "https://d29juml4m9n88c.cloudfront.net/games/plinkop/?lang=en&curr=usd&useIFrame=true",
    },
    {
      title: i18n("hilo.title"),
      intro: i18n("hilo.intro"),
      imageUrl:
        "https://egslot.net/Images/GameItem/game-pic_GameIcon_HiLo.webp",
      rating: 5,
      category: i18nCommon("Blockchain Games"),
      iframeUrl:
        "https://d29juml4m9n88c.cloudfront.net/games/hilop/?lang=en&curr=usd&useIFrame=true",
    },
    {
      title: i18n("wheel.title"),
      intro: i18n("wheel.intro"),
      imageUrl:
        "https://egslot.net/Images/GameItem/game-pic_GameIcon_Wheel.webp",
      rating: 5,
      category: i18nCommon("Blockchain Games"),
      iframeUrl:
        "https://d29juml4m9n88c.cloudfront.net/games/wheelp/?lang=en&curr=usd&useIFrame=true",
    },
    {
      title: i18n("dice.title"),
      intro: i18n("dice.intro"),
      imageUrl:
        "https://egslot.net/Images/GameItem/game-pic_GameIcon_Dice.webp",
      rating: 5,
      category: i18nCommon("Blockchain Games"),
      iframeUrl:
        "https://d29juml4m9n88c.cloudfront.net/games/dicep/?lang=en&curr=usd&useIFrame=true",
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
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data.event === "close") {
        setShowIframe(false); // 做一些處理，例如關閉 iframe
      }
    };
    window.addEventListener("message", handleMessage);
    // 清除事件監聽器
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);
  const [isIOS, setIsIOS] = useState(false);
  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    setIsIOS(/iphone|ipad|ipod/.test(userAgent));
  }, []);
  const handleWrapperClick = (event) => {
    event.stopPropagation();
    if (!event.target.closest(".right-sidebar")) {
      onClose();
    }
  };
  return (
    <>
      {(isRightSideOpen || isRightSidebarOpen) && (
        <section className="fixed top-0 right-0 w-full h-full z-[9999]">
          <div onClick={handleWrapperClick}
            className="right-sidebar fixed h-full right-0 top-0 z-[9999] overflow-auto bg-rightsidebar-color w-[25%] px-6 py-4 
      max-[1024px]:w-full max-[1024px]:bg-[#9a47bb]"
          >
            <TbArrowNarrowRight
              onClick={handleCloseSidebar}
              className="text-white text-4xl cursor-pointer"
            />

          {/* <Search/> */}
          <h2 className="title-font mb-2 text-xl py-2 text-white">
            {i18nCommon(content)}
          </h2>
          <div className=" flex flex-col items-center justify-center px-2">
            {content === "Movie" ? (
              <div className="flex items-start justify-start p-3 rounded-lg w-full max-w-[350px] cursor-pointer my-1">
                <iframe
                  width="350"
                  height="350"
                  src="https://www.youtube.com/embed/Vl-M1xquTgk"
                  title="Eazy Gaming Introduction Video"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            ) : (
              games
                .filter((game) => game.category === i18nCommon(content))
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
                ))
            )}
            <ShareButton />
          </div>
        </div>
        </section>
      )}
      {showIframe && (
        <div className="fixed w-full h-full top-0 z-[99999]">
          {!isToolbarHidden && <NoticeScroll />}
          <div className="absolute top-0 left-0 p-2">
            <button onClick={handleCloseIframe} className="text-white text-xl">
              <SlClose className="text-white text-xl opacity-60 bg-[#00000057]" />
            </button>
          </div>
          {isIOS ? null : ( // iOS系統隱藏按鈕
            <div className="absolute bottom-0 right-0 p-2">
              <button
                onClick={handleFullScreen}
                className="text-white text-4xl"
              >
                <SlSizeFullscreen className="text-white text-3xl bg-[#00000057]" />
              </button>
            </div>
          )}
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
