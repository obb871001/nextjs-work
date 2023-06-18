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
    gameType: "Hot game - Egames",
    gameTitle: "ADVENTURE OF SIMBAD",
    gameIntro: "You must stay alive in this horror/puzzle adventure.Try to survive the vengeful toys waiting for you in the abandoned toy factory. Use your GrabPack to hack electrical circuits or nab anything.",
    playLink: "",
    addFavorite: "",
  },
  {
    background: "/Images/carousel/bg1.png",
    titleImage: "/Images/carousel/magic-1.png",
    gameType: "Hot game - Slot",
    gameTitle: "Witch's Love",
    gameIntro: "You must stay alive in this horror/puzzle adventure.Try to survive the vengeful toys waiting for you in the abandoned toy factory. Use your GrabPack to hack electrical circuits or nab anything.",
    playLink: "",
    addFavorite: "",
  },
  {
    background: "/Images/carousel/bg1.png",
    titleImage: "/Images/carousel/neko-2.png",
    gameType: "Hot game - Slot",
    gameTitle: "NEKO MAID",
    gameIntro: "You must stay alive in this horror/puzzle adventure.Try to survive the vengeful toys waiting for you in the abandoned toy factory. Use your GrabPack to hack electrical circuits or nab anything.",
    playLink: "",
    addFavorite: "",
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
    <section className="w-screen lg:h-screen md:h-[590px] flex">
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
                className="w-[full] h-full relative flex justify-center bg-no-repeat bg-center bg-cover max-[640px]:p-2"
                style={{ backgroundImage: `url(${carousel.background})` }}
              >
                <article className="flex w-[80%] justify-center items-start self-center max-w-[1200px] ml-[0%] 
                max-[640px]:mx-auto max-[640px]:w-full max-[640px]:ml-auto max-[640px]:m-2 max-[640px]:h-[50%]">
                  <div className="pt-32 max-[640px]:w-[100%] max-[640px]:absolute max-[640px]:z-[99] max-[640px]:py-2 max-[640px]:mt-48 max-[640px]:bg-[#00000057]">
                    <p className="lg:text-base md:text-[20px] text-left text-white mb-[15px] max-[640px]:mt-[5%] max-[640px]:pl-[10%]">
                      {carousel.gameType}
                    </p>
                    <p className="title-font-bold lg:text-7xl md:text-[30px] text-left text-white mb-[25px] 
                    max-[640px]:text-4xl max-[640px]:mt-[0%] max-[640px]:pl-[10%] max-[640px]:mb-[15px]">
                      {carousel.gameTitle}
                    </p>
                    <p className="lg:text-base md:text-[20px] text-left text-white mb-[30px] max-[640px]:mt-[5%] max-[640px]:pl-[10%]">
                      {carousel.gameIntro}
                    </p>
                    <div className="flex items-center max-[640px]:justify-center max-[640px]:mb-[5%]">
                      <div className="title-font-bold flex items-center justify-center bg-white rounded-lg btn-shadow px-4 py-3 mr-2 cursor-pointer h-[50px]">
                        PlayNow
                        <img
                        className="w-[32px] ml-2"
                        src="/Images/carousel/playNow-icon.png"
                        alt="PlayNow"
                        />
                      </div>
                      <div className="border border-white text-white rounded-lg px-4 py-3 mr-2 cursor-pointer max-[640px]:bg-add-favorite-btn">
                        Add to favorite
                      </div>
                    </div>
                  </div>
                  
                  <img
                    alt="image"
                    src={carousel.titleImage}
                    className="w-[auto] max-w-[700px] h-screen object-cover hover:scale-110 transition deration-500 
                    max-[640px]:w-[100%] max-[640px]:pb-[50%] max-[640px]:pt-[5%] max-[640px]:hover:scale-100 max-[640px]:transition-none"
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
