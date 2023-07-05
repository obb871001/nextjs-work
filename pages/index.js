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
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Head>
        <meta property="og:image" content="../public/Images/logo/EGloading.png" />
        <meta property="og:description" content="EAZY Gaming, leading the Global Gaming Market Trend!" />
        <meta property="og:url" content="https://egslot.net/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="EAZY Gaming" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="manifest" href="./manifest.json" />
      </Head>
      <Header />
      <NavbarMenuList />
      {/* <HomePage /> */}
      {/* <Body /> */}
      {/* <Video /> */}
      {/* <ToDownScroll /> */}
      <Carousel />
      {/* <GameTypeChoose />*/}
      <FooterNew /> 
    </>
  );
}
