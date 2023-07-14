import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import CarouselNavigation from "./CarouselNavigation";
import FooterNew from "./../Footer/FooterNew";
import { SlSizeFullscreen, SlClose, SlSizeActual } from "react-icons/sl";
import RightSidebar from "../Header/RightSidebar";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import { Button } from "antd";
import NoticeScroll from "../NoticeScroll/noticeScroll";
import { useTranslation } from "next-export-i18n";
SwiperCore.use([Navigation, Autoplay]);

const Carousel = () => {
  const { t } = useTranslation();
  const i18n = (key) => t(`carousel.${key}`);
  const i18nCommon = (key) => t(`common.${key}`);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isRightSidebarOpen, setRightSidebarOpen] = useState(false); // 添加状态用于控制右侧菜单的显示和隐藏
  const handleItemClick = (itemId) => {
     if (itemId === selectedItem) {
      setSelectedItem(null);
      setRightSidebarOpen(false); // 关闭右侧菜单
    } else {
      setSelectedItem(itemId);
      setRightSidebarOpen(true); // 打开右侧菜单
    }
    setRightSidebarOpen(true);
  };
  const CarouselList = [
    {
      background: "/Images/carousel/bg_witch.webp",
      titleImage: "/Images/carousel/magic-1.webp",
      gameType: `${i18nCommon("Hot game")} - ${i18nCommon("SLOT")}`,
      gameTitle: i18n("witchLove.title"),
      gameIntro_pc: i18n("witchLove.introPC"),
      gameIntro_mobile: i18n("witchLove.introMobile"),
      playLink:
        "https://d29juml4m9n88c.cloudfront.net/games/witchlove/?lang=en&curr=usd&hidefps=true",
      addFavorite: "",
      gameImage1: "/Images/carousel/Witch_2.webp",
      gameImage2: "/Images/carousel/Witch_1.webp",
    },
    {
      background: "/Images/carousel/bg_neko.webp",
      titleImage: "/Images/carousel/neko-2.webp",
      gameType: `${i18nCommon("Hot game")} - ${i18nCommon("SLOT")}`,
      gameTitle: i18n("nekoMaid.title"),
      gameIntro_pc: i18n("nekoMaid.introPC"),
      gameIntro_mobile: i18n("nekoMaid.introMobile"),
      playLink:
        "https://d29juml4m9n88c.cloudfront.net/games/nekomaid/?lang=en&curr=usd&hidefps=true",
      addFavorite: "",
      gameImage1: "/Images/carousel/Neko_2.webp",
      gameImage2: "/Images/carousel/Neko_1.webp",
    },
    {
      background: "/Images/carousel/bg_simba.webp",
      titleImage: "/Images/carousel/simbad.webp",
      gameType: `${i18nCommon("Hot game")} - ${i18nCommon("SLOT")}`,
      gameTitle: i18n("adventureOfSinbad.title"),
      gameIntro_pc: i18n("adventureOfSinbad.introPC"),
      gameIntro_mobile: i18n("adventureOfSinbad.introMobile"),
      playLink:
        "https://d29juml4m9n88c.cloudfront.net/games/adventureofsinbad/?lang=en&curr=usd&hidefps=true",
      addFavorite: "",
      gameImage1: "/Images/carousel/Sinbad_2.webp",
      gameImage2: "/Images/carousel/Sinbad_1.webp",
    },
    {
      background: "/Images/carousel/bg_gold.webp",
      titleImage: "/Images/carousel/gold.webp",
      gameType: `${i18nCommon("Hot game")} - ${i18nCommon("BeABanker")}`,
      gameTitle: i18n("spin.title"),
      gameIntro_pc: i18n("spin.introPC"),
      gameIntro_mobile: i18n("spin.introMobile"),
      playLink:
        "https://d29juml4m9n88c.cloudfront.net/games/wheelp/?lang=en&curr=usd",
      More2: "123",
      addFavorite: "",
      gameImage1: "/Images/carousel/gold2.webp",
      gameImage2: "/Images/carousel/gold1.webp",
    },
    {
      background: "/Images/carousel/bg_dragon.webp",
      titleImage: "/Images/carousel/dragon.webp",
      gameType: `${i18nCommon("Hot game")} - ${i18nCommon("Fishing")}`,
      gameTitle: i18n("treasureKing.title"),
      gameIntro_pc: i18n("treasureKing.introPC"),
      gameIntro_mobile: i18n("treasureKing.introMobile"),
      playLink:
        "https://d29juml4m9n88c.cloudfront.net/games/treasureking/?lang=en&curr=usd",
      addFavorite: "",
      gameImage1: "/Images/carousel/dragon2.webp",
      gameImage2: "/Images/carousel/dragon1.webp",
    },
    {
      background: "/Images/carousel/bg_blockchain.webp",
      titleImage: "/Images/carousel/blockchain.webp",
      gameType: `${i18nCommon("Hot game")} - ${i18nCommon("Blockchain Games")}`,
      gameTitle: i18n("blockchainGames.title"),
      gameIntro_pc: i18n("blockchainGames.introPC"),
      gameIntro_mobile: i18n("blockchainGames.introMobile"),
      playLink:
        "https://d29juml4m9n88c.cloudfront.net/games/blastxp/?lang=en&curr=usd",
      More1: "123",
      addFavorite: "",
      gameImage1: "/Images/carousel/block2.webp",
      gameImage2: "/Images/carousel/block1.webp",
    },
    // {
    //   background: "/Images/carousel/carousel4.png",
    //   titleImage: "/Images/carousel/carousel4Title.png",
    //   content: "開拓遊戲新階段　贏取獎金不間斷",
    // },
    // {
    //   background: "/Images/carousel/carousel1.jpeg",
    //   titleImage: "/Images/carousel/carousel1Title.png",
    //   content: "開拓遊戲新階段　贏取獎金不間斷",
    // },
    // {
    //   background: "/Images/carousel/carousel2.jpeg",
    //   titleImage: "/Images/carousel/carousel2Title.png",
    //   content: "無與倫比的主題遊戲",
    // },
    // {
    //   background: "/Images/carousel/carousel3.jpeg",
    //   titleImage: "/Images/carousel/carousel3Title.png",
    //   content: "您的美麗　是贏獎金的助力",
    // },
  ];

  const isBrowser = typeof window !== "undefined";
  const [showIframe, setShowIframe] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);
  const [isToolbarHidden, setIsToolbarHidden] = useState(true);
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
    if (showIframe && window.innerWidth > window.innerHeight) {
      const handleResize = () => {
        setInitialHeight(window.innerHeight);
        setIsToolbarHidden(window.innerHeight >= initialHeight);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    } else {
      setIsToolbarHidden(true);
    }
  }, [initialHeight, showIframe, windowWidth]);

  useEffect(() => {
    const handleOrientationChange = () => {
      setTimeout(() => {
        if (window.innerWidth > window.innerHeight) {
          setIsToolbarHidden(false);
        }
      }, 200);
    };

    window.addEventListener("orientationchange", handleOrientationChange);

    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange);
    };
  }, [windowWidth, initialHeight]);

  const handleOpenIframe = (game) => {
    setShowIframe(true);
    setSelectedGame(game);
  };

  const handleCloseIframe = () => {
    setShowIframe(false);
    setSelectedGame(null);
  };
  const [isFullscreen, setIsFullscreen] = useState(false);
  const iframeRef = useRef(null);

  const enterFullscreen = () => {
    if (iframeRef.current) {
      if (iframeRef.current.requestFullscreen) {
        iframeRef.current.requestFullscreen();
      } else if (iframeRef.current.mozRequestFullScreen) {
        iframeRef.current.mozRequestFullScreen();
      } else if (iframeRef.current.webkitRequestFullscreen) {
        iframeRef.current.webkitRequestFullscreen();
      } else if (iframeRef.current.msRequestFullscreen) {
        iframeRef.current.msRequestFullscreen();
      }
      setIsFullscreen(true);
    }
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    setIsFullscreen(false);
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(
        document.fullscreenElement ||
          document.mozFullScreenElement ||
          document.webkitFullscreenElement ||
          document.msFullscreenElement ||
          false
      );
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("mozfullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("msfullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener(
        "mozfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "msfullscreenchange",
        handleFullscreenChange
      );
    };
  }, []);

  return (
    <section className="w-screen min-h-screen lg:h-screen md:h-screen flex">
      <Swiper
        className="mySwiper h-full w-full"
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        // pagination={{
        //   type: "bullets",
        //   clickable: true,
        // }}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        effect="fade"
      >
        {CarouselList.map((carousel, index) => {
          return (
            <SwiperSlide key={index} className="">
              <section
                className="w-[full] h-full relative flex justify-center bg-no-repeat bg-center bg-cover"
                style={{ backgroundImage: `url(${carousel.background})` }}
              >
                <article
                  className="flex w-[80%] justify-center items-start self-center max-w-[1200px] ml-[0%] 
                max-[1024px]:mx-auto max-[1024px]:w-full max-[1024px]:ml-auto max-[1024px]:m-0 max-[1024px]:h-[100%] 
                max-[1024px]:items-center max-[1024px]:pt-[20%] max-[1024px]:bg-[#00000057]"
                >
                  <div
                    className="pt-32 mt-[0%] max-[1024px]:w-[100%]
                   max-[1024px]:absolute max-[1024px]:pt-0 max-[1024px]:z-[99] max-[1024px]:p-2 max-[1024px]:mt-[0%] max-[1024px]:bottom-[15%]"
                  >
                    <p className="lg:text-base md:text-[20px] text-left text-white mb-[15px] max-[1024px]:mt-[5%] max-[1024px]:px-[10%] max-[1024px]:hidden">
                      {carousel.gameType}
                    </p>
                    <p
                      className="title-font-bold text-myself-shadow lg:text-[3.5rem] md:text-[30px] text-left text-white mb-[25px] 
                    max-[1024px]:text-3xl max-[1024px]:mt-[0%] max-[1024px]:px-[10%] max-[1024px]:mb-[1%]"
                    >
                      {carousel.gameTitle}
                    </p>
                    <p className="lg:text-base md:text-[20px] text-myself-shadow-intro text-left text-white mb-[30px] max-[1024px]:mt-[5%] max-[1024px]:mb-[0] max-[1024px]:px-[10%] max-[1024px]:hidden">
                      {carousel.gameIntro_pc}
                    </p>
                    <p
                      className="lg:text-base md:text-[20px] text-myself-shadow-intro text-left text-white mb-[30px] 
                    max-[1024px]:mt-[3%] max-[1024px]:mb-[0] max-[1024px]:px-[10%] min-[1024px]:hidden"
                    >
                      {carousel.gameIntro_mobile}
                    </p>

                    <div className="flex gap-[10px] items-center my-8 max-[1024px]:justify-center max-[1024px]:mb-[3%] max-[1024px]:mt-[3%]">
                      <div className="">
                        <img
                          className="w-full max-w-[300px] h-auto max-h-[200px] rounded-md hover:scale-125 max-[1024px]:max-h-[150px]"
                          src={carousel.gameImage1}
                          alt={carousel.gameTitle}
                        />
                      </div>
                      <div className="">
                        <img
                          className="w-full max-w-[300px] h-auto max-h-[200px] rounded-md hover:scale-125 max-[1024px]:max-h-[150px]"
                          src={carousel.gameImage2}
                          alt={carousel.gameTitle}
                        />
                      </div>
                    </div>
                    <div className="flex items-center max-[1024px]:justify-center max-[1024px]:mb-[5%]">
                      {/* 只有在 playLink 存在時才顯示 PlayNow 按鈕 */}
                      {carousel.playLink && (
                        <div
                          className="title-font-bold flex items-center justify-center bg-white rounded-lg btn-shadow px-4 py-3 mr-2 cursor-pointer relative z-[99] h-[50px]"
                          onClick={() => handleOpenIframe(carousel)}
                        >
                          {i18nCommon("playnow")}
                          <img
                            className="w-[32px] ml-2"
                            src="/Images/carousel/playNow-icon.webp"
                            alt="PlayNow"
                          />
                        </div>
                      )}
                      {/* 只有在 More 存在時才顯示 More 按鈕 */}
                      {carousel.More1 && (
                        <div
                          onClick={() => handleItemClick("Blockchain Games")}
                          className="border border-white text-white rounded-lg px-4 py-3 mr-2 cursor-pointer max-[1024px]:bg-add-favorite-btn"
                        >
                          {i18nCommon("More")}
                        </div>
                      )}
                      {carousel.More2 && (
                        <div
                          onClick={() => handleItemClick("BeABanker")}
                          className="border border-white text-white rounded-lg px-4 py-3 mr-2 cursor-pointer max-[1024px]:bg-add-favorite-btn"
                        >
                          {i18nCommon("More")}
                        </div>
                      )}
                      {/* <div className="border border-white text-white rounded-lg px-4 py-3 mr-2 cursor-pointer max-[1024px]:bg-add-favorite-btn">
                        Add to favorite
                      </div> */}
                    </div>
                  </div>

                  <img
                    alt="image"
                    src={carousel.titleImage}
                    className="animate-wiggle w-[auto] max-w-[700px] h-screen object-contain hover:scale-110 transition deration-500 
                    max-[1024px]:w-[100%] max-[1024px]:pb-[30%] max-[1024px]:pt-[2%] max-[1024px]:hover:scale-100 max-[1024px]:transition-none 
                    max-[1024px]:object-contain max-[768px]:object-cover"
                  />

                  {/* <Button
                    size="large"
                    type="primary"
                    className="w-[250px]"
                    shape="round"
                    danger
                  >
                    了解更多
                  </Button> */}
                </article>
              </section>
            </SwiperSlide>
          );
        })}
        <CarouselNavigation />
      </Swiper>
      {showIframe && (
        <div className="fixed w-full h-full top-0 left-0 bottom-0 right-0 z-[99999]">
          {!isToolbarHidden && <NoticeScroll />}
          <div className="absolute top-0 right-0 p-2">
            <button onClick={handleCloseIframe} className="text-white text-xl">
              <SlClose className="text-white text-xl opacity-40 bg-[#00000057]" />
            </button>
          </div>
          <div className="absolute bottom-0 right-0 p-2">
            <button
              onClick={isFullscreen ? exitFullscreen : enterFullscreen} // 點擊時切換全螢幕模式
              className="text-white text-4xl"
            >
              {isFullscreen ? (
                <SlSizeActual className="text-white text-3xl bg-[#00000057]" />
              ) : (
                <SlSizeFullscreen className="text-white text-3xl bg-[#00000057]" />
              )}
            </button>
          </div>

          <iframe
            ref={iframeRef}
            src={selectedGame?.playLink}
            className="w-full h-full"
            allowFullScreen
          />
        </div>
      )}
      {selectedItem &&
        isRightSidebarOpen && ( // 仅当右侧菜单打开且有选定项时才显示右侧菜单
          <>
            <RightSidebar
              content={selectedItem}
              onClose={() => setRightSidebarOpen(false)} // 关闭右侧菜单的事件处理程序
            />
            {/* <Search content={selectedItem} /> */}
          </>
        )}
    </section>
  );
};

export default Carousel;
