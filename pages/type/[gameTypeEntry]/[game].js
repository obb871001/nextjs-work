import GameTranslate from "@/pages/components/ChangeTranslate/gameTranslate";
import Header from "@/pages/components/Header/Header";
import Head from "next/head";
import { useRouter } from "next/router";
import { useMemo, useRef, useState } from "react";
import Cookies from "js-cookie";
import { AiOutlineArrowLeft, AiOutlineReload } from "react-icons/ai";
import Link from "next/link";
import { useTranslation } from "next-export-i18n";
import { gameList } from "@/gamelist";
import Footer from "@/pages/components/Footer/Footer";

const gameLink = "https://d29juml4m9n88c.cloudfront.net/";

const Game = () => {
  const router = useRouter();

  const nowGame = router.query.game;
  const nowType = router.query.gameTypeEntry;

  const { t } = useTranslation();
  const i18n = (key) => t(`gameType.games.${nowGame}.${key}`);
  const i18n_normal = (key) => t(`gameType.games.${key}`);
  const i18nCommon = (key) => t(`common.${key}`);

  const [showClickToStart, setShowClickToStart] = useState(true);
  const [lang, setLang] = useState(Cookies.get("lang") || "en");

  const nowGameProps = useMemo(() => {
    return gameList.find((item) => {
      return item.prefix === nowGame;
    });
  }, [nowGame, router]);

  const iframeRef = useRef(null);

  const reloadIframe = () => {
    if (iframeRef.current) {
      iframeRef.current.src = iframeRef.current.src;
    }
  };

  return (
    <main
      className="w-full min-h-screen pt-[67px] md:pt-[90px]"
      style={{
        backgroundImage: `url(/Images/type/mainBackground.png))`,
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
      <article className=" container mx-auto py-[15px] flex flex-col gap-[30px]">
        <section className="flex md:flex-row items-start justify-between flex-col-reverse	md:flex-wrap">
          <img
            className="md:h-[200px]  md:mx-0 mx-auto object-cover"
            src={`/Images/type/GAMES/${nowGame}/logo_${lang}.png`}
            onError={(e) => {
              e.target.src = `/Images/type/GAMES/${nowGame}/logo_en.png`;
            }}
            alt="title"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 md:flex md:mx-0 mx-auto md:w-auto w-[90%] items-center gap-[10px] py-[10px]">
            <GameTranslate setLang={setLang} lang={lang} />
            <Link
              href={`/type/${nowType}`}
              className="p-[8px] title-font text-base md:text-2xl rounded-[10px] border border-[#573e7e] flex items-center justify-center gap-[15px] cursor-pointer text-white relative"
            >
              <AiOutlineArrowLeft
                className={`transition duration-300 hidden md:block`}
              />
              <p className="text-overflow">{i18n_normal("backToPrev")}</p>
            </Link>
            <div
              onClick={() => {
                reloadIframe();
              }}
              className="p-[8px] title-font text-base md:text-2xl rounded-[10px] border border-[#573e7e] flex items-center justify-center gap-[15px] cursor-pointer text-white relative"
            >
              <AiOutlineReload className="hidden md:block" />
              <p className="text-overflow">{i18n_normal("reloadGame")}</p>
            </div>
          </div>
        </section>
        <section
          className={`${
            nowGameProps?.tighter
              ? "w-[360px] md:w-[450px] !h-[600px]"
              : "w-[95%]"
          } mx-auto h-[300px] md:h-[800px] bg-no-repeat bg-center relative`}
          style={{
            backgroundImage: `url(/Images/type/GAMES/gameBorder.png)`,
            backgroundSize: "100% 100%",
          }}
        >
          {showClickToStart ? (
            <div
              className="absolute absolute-center w-[95%] h-[90%] bg-center"
              style={{
                backgroundImage: `url(/Images/type/GAMES/${nowGame}/${nowGame}_banner.png)`,
                backgroundSize: "100% 100%",
              }}
            ></div>
          ) : (
            <iframe
              ref={iframeRef}
              src={`${gameLink}/${nowGameProps?.url}?lang=${lang}&${nowGameProps?.param}`}
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          )}
          {showClickToStart && (
            <div
              onClick={() => {
                setShowClickToStart(false);
              }}
              className="absolute cursor-pointer bg-center z-[2] top-0 left-0 w-full h-full flex items-end justify-center py-[20px]"
              style={{
                backgroundImage: `url(/Images/type/GAMES/gameBorder.png)`,
                backgroundSize: "100% 100%",
              }}
            >
              <img
                className="fadeInOut w-[200px] md:w-[400px]"
                src={`/Images/type/GAMES/click_to_start.png`}
              />
            </div>
          )}
        </section>
        <section className="title-font text-white px-[20px] md:px-0 lg:w-[1240px] mx-auto">
          <p className="text-5xl text-center md:text-start font-extrabold">
            {i18n("title")}
          </p>
          <div className="h-[1px] bg-[#573e7e] my-[20px]"></div>
          <div className="md:text-2xl text-lg text-center md:text-start tracking-wider leading-[25px] md:leading-[35px]">
            {i18n("intro")}
          </div>
        </section>
      </article>
      <Footer />
    </main>
  );
};

export default Game;

export async function getStaticProps({ params }) {
  const { gameTypeEntry, game } = params;
  return {
    props: {
      gameType: gameTypeEntry,
      game: game,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: gameList.map((item) => {
      return { params: { game: item.prefix, gameTypeEntry: item.type } };
    }),
    fallback: "blocking",
  };
}
