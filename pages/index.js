import Head from "next/head";
// import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "./components/Header/Header";
import HomePage from "./components/home/HomePage";
import Video from "./components/home/Video";
import ToDownScroll from "./components/home/ToDownScroll";
import Carousel from "./components/home/Carousel";
import GameTypeChoose from "./components/home/GameTypeChoose";
import Footer from "./components/Footer/Footer";
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <HomePage />
      {/* <Body /> */}
      {/* <Video /> */}
      {/* <ToDownScroll /> */}
      <Carousel />
      {/* <GameTypeChoose />
      <Footer /> */}
    </>
  );
}
