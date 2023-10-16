import Head from "next/head";
// import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "./components/Header/Header";
import NavbarMenuList from "./components/Header/NavbarMenuList";
import HomePage from "./components/home/HomePage";
import Video from "./components/home/Video";
import ToDownScroll from "./components/home/ToDownScroll";
import Carousel from "./components/home/Carousel";
import GameTypeChoose from "./components/home/GameTypeChoose";
import FooterNew from "./components/Footer/FooterNew";
import Body from "./GameLabby/components/Body";
import GameIntro from "./components/home/gameIntro";
import GameType from "./components/home/gameType";
import Footer from "./components/Footer/Footer";
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Head>
        <meta
          property="og:image"
          content="../public/Images/logo/EGloading.png"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:description"
          content="EAZY Gaming, leading the Global Gaming Market Trend!"
        />
        <meta property="og:url" content="https://egslot.net/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="EAZY Gaming" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="manifest" href="./manifest.json" />
      </Head>
      <Header />
      <HomePage />
      {/* <Body /> */}
      <Video />
      <GameIntro navType="slot" />
      <GameIntro
        navType="spin"
        wrapperClass="md:hidden"
        backgroundProps={{
          backgroundSize: "211% 100%",
          backgroundPositionX: "-238px",
        }}
        charactorProps={{
          left: "!left-[27%]",
        }}
        customList={[
          {
            prefix: "sicbo",
          },
          {
            prefix: "xocdia",
          },
          {
            prefix: "fishprawncrab",
          },
        ]}
      />
      <GameIntro
        navType="blockchain"
        wrapperClass="md:hidden"
        backgroundProps={{
          backgroundSize: "211% 100%",
          backgroundPositionX: "-238px",
        }}
        charactorProps={{
          left: "!left-[24%]",
        }}
        customList={[
          {
            prefix: "blastx",
          },
          {
            prefix: "dice",
          },
          {
            prefix: "hilo",
          },
          {
            prefix: "plinko",
          },
          {
            prefix: "wheel",
          },
        ]}
      />

      {/* <GameType /> */}
      {/* <Carousel /> */}
      <GameTypeChoose wrapperClass="" />
      <Footer />
    </main>
  );
}
