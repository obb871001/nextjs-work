import Head from "next/head";
import { useRouter } from "next/router";
import React, { useMemo, useState } from "react";
import Header from "../components/Header/Header";
import Link from "next/link";
import GameTypeChoose from "../components/home/GameTypeChoose";
import { gameList } from "@/gamelist";
import { useTranslation } from "next-export-i18n";
import Footer from "../components/Footer/Footer";
import useIsMobile from "@/hooks/useIsMobile";

const GameTypeEntry = () => {
  const { t } = useTranslation();
  const i18n = (key) => t(`gameType.games.${key}`);

  const router = useRouter();

  const isMobile = useIsMobile();

  const nowType = router.query.gameTypeEntry;

  const [hovered, setHovered] = useState(null);
  const [buttonHovered, setButtonHovered] = useState(false);

  const typeGameList = useMemo(() => {
    return gameList.filter((item) => item.type === nowType);
  }, [gameList, nowType]);
  return (
    <main
      className="w-full min-h-screen pt-[67px] md:pt-[90px]"
      style={{
        backgroundImage: `url(/Images/type/mainBackground.webp))`,
      }}
    >
      <Head>
        <meta
          property="og:image"
          content="../public/Images/logo/EGloading.png"
        />
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
      <Header fill />
      <section
        className="w-full h-[300px] md:h-[700px] bg-center bg-cover"
        style={{
          backgroundImage: `url(/Images/type/${
            isMobile ? "mobile-" : ""
          }${nowType}_banner.webp)`,
        }}
      ></section>
      <section className="py-[30px] md:py-[80px] flex items-center justify-center">
        <div className="md:w-[880px] w-[95%] md:w-[70%] grid grid-cols-2 md:grid md:grid-cols-3 gap-[10px]">
          {typeGameList.map((item, index) => {
            return (
              <div
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className="relative"
                key={index}
              >
                <img
                  className="w-full rounded-[5px] h-[200px] md:h-[300px] border-2 border-light-yellow-text overflow-hidden"
                  src={`/Images/type/${router.query.gameTypeEntry}/${item.prefix}_en_s.webp`}
                />
                {hovered === index && (
                  <div
                    className="w-full h-full absolute top-0 left-0 flex items-center justify-center bg-center rounded-[5px]"
                    style={{
                      backgroundImage: `url(/Images/type/buttonShow.png)`,
                      backgroundSize: "113% 113%",
                    }}
                  >
                    <Link href={`/type/${nowType}/${item.prefix}`}>
                      <img
                        className="cursor-pointer w-[250px]"
                        onMouseEnter={() => setButtonHovered(true)}
                        onMouseLeave={() => setButtonHovered(false)}
                        src={
                          buttonHovered
                            ? "/Images/type/play_now_hover.png"
                            : "/Images/type/play_now.png"
                        }
                        alt="Egslot"
                      />
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
      <section className="w-full md:w-[1240px] mx-auto text-white md:mt-[50px] md:pb-[100px]">
        <p className="md:text-start text-center text-2xl md:text-5xl font-extrabold">
          {i18n("moreGamePlatform")}
        </p>
        <div className="h-[1px] bg-white my-[20px]"></div>
        <GameTypeChoose nowType={nowType} />
      </section>
      <Footer />
    </main>
  );
};

export default GameTypeEntry;

export async function getStaticProps({ params }) {
  return {
    props: {
      gameType: params.gameTypeEntry,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { gameTypeEntry: "blockchain" } },
      { params: { gameTypeEntry: "slot" } },
      { params: { gameTypeEntry: "fishing" } },
      { params: { gameTypeEntry: "spin" } },
    ],
    fallback: "blocking",
  };
}
