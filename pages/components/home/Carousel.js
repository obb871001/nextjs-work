import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import CarouselNavigation from "./CarouselNavigation";
import FooterNew from "./../Footer/FooterNew";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import { Button } from "antd";
SwiperCore.use([Navigation, Autoplay]);

const CarouselList = [
  {
    background: "/Images/carousel/bg1.png",
    titleImage: "/Images/carousel/simbad.png",
    gameType: "Hot game - Slot",
    gameTitle: "ADVENTURE OF SINBAD",
    gameIntro: "Embark on a Voyage, Seek the Treasures of the Seven Seas! In Adventure of Sinbad™, you will overcome various dangers and mythical creatures alongside Sinbad, experiencing her maturity, confidence, and pride. With a bold attitude, you will navigate through all the challenges and ultimately discover rare treasures, becoming legendary adventurers whose names will be remembered for eternity!",
    playLink: "",
    addFavorite: "",
    gameImage1: "/Images/carousel/Sinbad_2.png",
    gameImage2: "/Images/carousel/Sinbad_1.png",
  },
  {
    background: "/Images/carousel/bg1.png",
    titleImage: "/Images/carousel/magic-1.png",
    gameType: "Hot game - Slot",
    gameTitle: "Witch's Love",
    gameIntro: "Explore the mysterious power of love as you step into the Witch's Love™ enchanted cottage, you will witness the birth of magical romance! The witch, skilled in brewing various potions, has elevated her magical studies to new heights, enchanting everyone who comes into contact with her love elixirs. Are you ready to embark on this enchanting journey and seek your own treasure in this game?",
    playLink: "",
    addFavorite: "",
    gameImage1: "/Images/carousel/Witch_2.png",
    gameImage2: "/Images/carousel/Witch_1.png",
  },
  {
    background: "/Images/carousel/bg1.png",
    titleImage: "/Images/carousel/neko-2.png",
    gameType: "Hot game - Slot",
    gameTitle: "NEKO MAID",
    gameIntro: "Sweet Maids, Exclusive Experience! The Neko Maid™ warmly invites you to step into their dreamy café, where the magic of happiness surrounds every bite of your meal! The maids are young, cheerful, and adorable, and their attentive service will provide you with unparalleled care and satisfaction. Infusing your meals with love and immersing you in a sweet gaming experience.",
    playLink: "",
    addFavorite: "",
    gameImage1: "/Images/carousel/Neko_2.png",
    gameImage2: "/Images/carousel/Neko_1.png",
  },
  
  // {
  //   background: "/Images/carousel/carousel1-2.jpg",
  //   titleImage: "/Images/carousel/carousel1Title-2.png",
  //   content: "CASINO",
  // },
  // {
  //   background: "/Images/carousel/carousel4.png",
  //   titleImage: "/Images/carousel/carousel4Title.png",
  //   content: "開拓遊戲新階段　贏取獎金不間斷",
  // },
  // {
  //   background: "/Images/carousel/carousel1-3.jpg",
  //   content: "開拓遊戲新階段　贏取獎金不間斷",
  // },
  // {
  //   background: "/Images/carousel/carousel2-3.jpg",
  //   content: "無與倫比的主題遊戲",
  // },
  // {
  //   background: "/Images/carousel/carousel3-3.jpg",
  //   content: "您的美麗　是贏獎金的助力",
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

const Carousel = () => {
  return (
    <section className="w-screen h-screen lg:h-screen md:h-screen flex mobile-height">
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
                <article className="flex w-[80%] justify-center items-start self-center max-w-[1200px] ml-[0%] 
                max-[1024px]:mx-auto max-[1024px]:w-full max-[1024px]:ml-auto max-[1024px]:m-0 max-[1024px]:h-[80%]">

                  <div className="pt-32 mt-[0%] max-[1024px]:w-[100%]
                   max-[1024px]:absolute max-[1024px]:pt-0 max-[1024px]:z-[99] max-[1024px]:p-2 max-[1024px]:mt-[10%] max-[1024px]:bg-[#00000057]">
                    <p className="lg:text-base md:text-[20px] text-left text-white mb-[15px] max-[1024px]:mt-[5%] max-[1024px]:px-[10%]">
                      {carousel.gameType}
                    </p>
                    <p className="title-font-bold lg:text-7xl md:text-[30px] text-left text-white mb-[25px] 
                    max-[1024px]:text-3xl max-[1024px]:mt-[0%] max-[1024px]:px-[10%] max-[1024px]:mb-[15px]">
                      {carousel.gameTitle}
                    </p>
                    <p className="lg:text-base md:text-[20px] text-left text-white mb-[30px] max-[1024px]:mt-[5%] max-[1024px]:mb-[0] max-[1024px]:px-[10%]">
                      {carousel.gameIntro}
                    </p>
                    
                    <div className="flex gap-[10px] items-center my-8 max-[1024px]:justify-center max-[1024px]:mb-[5%]">
                      <div className="">
                        <img
                          className="w-[300px] rounded-md hover:scale-125"
                          src={carousel.gameImage1}
                          alt={carousel.gameTitle}
                          />
                      </div>
                      <div className="">
                        <img
                          className="w-[300px] rounded-md hover:scale-125"
                          src={carousel.gameImage2}
                          alt={carousel.gameTitle}
                          />
                      </div>
                    </div>
                    <div className="flex items-center max-[1024px]:justify-center max-[1024px]:mb-[5%]">
                      <div className="title-font-bold flex items-center justify-center bg-white rounded-lg btn-shadow px-4 py-3 mr-2 cursor-pointer h-[50px]">
                        PlayNow
                        <img
                        className="w-[32px] ml-2"
                        src="/Images/carousel/playNow-icon.png"
                        alt="PlayNow"
                        />
                      </div>
                      {/* <div className="border border-white text-white rounded-lg px-4 py-3 mr-2 cursor-pointer max-[1024px]:bg-add-favorite-btn">
                        Add to favorite
                      </div> */}
                    </div>
                  </div>
                  
                  <img
                    alt="image"
                    src={carousel.titleImage}
                    className="animate-wiggle w-[auto] max-w-[700px] h-screen object-cover hover:scale-110 transition deration-500 
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
      {/* <FooterNew /> */}
    </section>
  );
};

export default Carousel;
