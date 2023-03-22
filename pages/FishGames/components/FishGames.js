import GameIntroduce from "@/pages/components/GameIntroduce/GameIntroduce";

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
              除了老虎機遊戲，SimplePlay
              亦提供不同的捕魚遊戲，為線上娛樂營運商提供豐富的遊戲選擇。捕魚遊戲可支援最多六人同時連線，並有不同的遊戲特點，任君選擇！
            </p>
          </div>
        </section>
      </main>
      <main className="bg-[url(/Images/FishGames/gamebg.jpeg)] lg:py-[100px] py-[20px] w-full bg-cover bg-center bg-no-repeat">
        <section className="container mx-auto max-[640px]:px-[20px]">
          <section className="grid md:grid-cols-2 grid-cols-1 gap-2">
            <GameIntroduce
              intro="《深海歷險》是 SimplePlay 最新的捕魚遊戲，是一款在遊戲過程中支援手機縱橫屏切換的捕魚遊戲，讓您的玩家能隨心所欲遊玩！"
              gameModal="url(/Images/FishGames/games/games1Modal.png)"
              gameBackground="url(/Images/FishGames/games/games1.jpeg)"
              gameIcon="/Images/FishGames/games/games1Icon.png"
            />
          </section>
        </section>
      </main>
    </>
  );
};

export default FishGames;
