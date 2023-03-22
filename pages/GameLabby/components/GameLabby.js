import { useEffect } from "react";
import BoxTitle from "@/pages/components/IconTextBox/BoxTitle";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Banner from "./Banner";
import Body from "./Body";
import App from "./App";
import Skill from "./Skill";
import TableLabby from "./TableLabby";

const Tip = ({ SVG, title, content }) => {
  return (
    <section className="flex flex-col items-center text-white">
      {SVG}
      <p className="text-3xl font-medium my-[20px]">{title}</p>
      <p className="">{content}</p>
    </section>
  );
};

const GameLabby = () => {
  const { ref, inView } = useInView();
  return (
    <>
      <Banner />{" "}
      <section className="py-[100px] bg-[#000F27]">
        <div className="container mx-auto">
          <Body />
        </div>
      </section>
      <section
        className="w-full h-[650px] bg-[url(/Images/GameLabby/banner2.jpeg)]"
        style={{ backgroundPosition: "50% 0%" }}
      >
        <div className="container mx-auto flex items-center justify-between h-full">
          <App />
        </div>
      </section>
      <section
        className="min-h-[400px] w-full"
        style={{
          background:
            "linear-gradient(180deg,rgb(8,31,88) 0%,rgb(20,22,64) 50%,rgb(12,13,38) 100%)",
        }}
      >
        <Skill />
      </section>
      <section className="w-full min-h-[700px] bg-[#142B40] py-[50px] bg-[url(/Images/GameLabby/banner3.png)] bg-center bg-no-repeat max-[640px]:bg-none">
        <TableLabby />
      </section>
    </>
  );
};

export default GameLabby;
