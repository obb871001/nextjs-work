import GameIntroduce from "@/pages/components/GameIntroduce/GameIntroduce";
import Link from "next/link";

const FishGames = () => {
  return (
    <>
      <main
        className="h-[580px] w-full pt-[105px] lg:bg-fishlg bg-fishmd "
        style={{
          backgroundImage:
            "url(/Images/FishGames/modal.png),url(/Images/FishGames/bg.jpeg)",
          // backgroundPosition: "46vw 0,50% 50%",
          backgroundRepeat: "no-repeat,no-repeat",
          backgroundSize: "contain,cover",
        }}
      >
        <section className="container mx-auto text-white flex items-center justify-start h-full max-[640px]:px-[20px]">
          <div className="max-[640px]:mb-[40%]">
            <p className="text-[50px] font-medium text-myself-shadow mb-[30px] max-[640px]:text-2xl">
              捕魚遊戲
            </p>
            <p className="w-[500px] max-[640px]:w-auto max-[640px]:text-sm">
              除了老虎機遊戲，我們
              亦提供不同的捕魚遊戲，為線上娛樂營運商提供豐富的遊戲選擇。捕魚遊戲可支援最多六人同時連線，並有不同的遊戲特點，任君選擇！
            </p>
          </div>
        </section>
      </main>
      <main className="bg-[url(/Images/FishGames/gamebg.jpeg)] lg:py-[100px] py-[20px] w-full bg-cover bg-center bg-no-repeat">
        <section className="container mx-auto max-[640px]:px-[20px]">
          <section className="grid md:grid-cols-2 grid-cols-1 gap-2">
            <GameIntroduce
              intro="《秘海寶藏》探索海洋的深度，揭開古老文明的奧秘。駕駛強大的潛艇，發現巨大的財富和隱藏的未知科技!"
              gameModal="url(/Images/FishGames/games/games1Modal.png)"
              gameBackground="url(/Images/FishGames/games/games1.jpeg)"
              gameIcon="/Images/FishGames/games/games1Icon.png"
              playGameLink="https://d29juml4m9n88c.cloudfront.net/games/fishing/treasureking/?lang=en&curr=usd&useIFrame=true"
            />
          </section>
        </section>
      </main>
    </>
  );
};

export default FishGames;
