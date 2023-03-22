import GameIntroduce from "@/pages/components/GameIntroduce/GameIntroduce";
import BoxTitle from "@/pages/components/IconTextBox/BoxTitle";
import { Button } from "antd";

const SlotGames = () => {
  return (
    <>
      <section className="banner h-[440px] relative w-full bg-[url(/Images/SlotGames/banner.jpeg)] bg-cover bg-no-repeat bg-center">
        <div className="bg-[url(/Images/SlotGames/modal.png)] w-full h-full bg-no-repeat lg:bg-[40%,100%] md:bg-center max-[640px]:bg-bottom">
          {/* <section className="container mx-auto h-full"> */}
          <div className="container mx-auto h-full flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center lg:self-end">
              <img alt="image" src="/Images/SlotGames/mainEvents.png" />
              <p className="text-myself-shadow text-white text-xl font-medium mb-[30px]">
                您的美麗　是贏獎金的助力
              </p>
              <Button
                className="w-[200px] !h-[50px]"
                size="large"
                shape="round"
                type="primary"
                danger
              >
                即將推出
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#202123] flex flex-col py-[70px]">
        <section className="container mx-auto max-[640px]:px-[20px]">
          <BoxTitle
            white
            title="老虎機遊戲"
            content="我們的老虎機遊戲由經驗豐富的開發人員和電腦動畫師精心製作。每款遊戲賠率吸引、畫面流暢，而且毋須安裝。產品主題涵蓋古今中外經典故事，更設有性感真人老虎機。"
          />
          <section className="grid grid-cols-2 max-[640px]:grid-cols-1 gap-2">
            <GameIntroduce
              intro="《兔美人》是一款 3x5 轉輪、243
                  路線的老虎機。遊戲的隨機擴展全輪百搭獎可令相應轉輪增加至 4
                  格。當三個轉輪均被擴展，遊戲路線可高達 576 條！"
              gameModal="url(/Images/SlotGames/games/games1Modal.png)"
              gameBackground="url(/Images/SlotGames/games/games1.jpeg)"
              gameIcon="/Images/SlotGames/games/games1Icon.png"
            />
            <GameIntroduce
              intro="《兔美人》是一款 3x5 轉輪、243
                  路線的老虎機。遊戲的隨機擴展全輪百搭獎可令相應轉輪增加至 4
                  格。當三個轉輪均被擴展，遊戲路線可高達 576 條！"
              gameModal="url(/Images/SlotGames/games/games1Modal.png)"
              gameBackground="url(/Images/SlotGames/games/games1.jpeg)"
              gameIcon="/Images/SlotGames/games/games1Icon.png"
            />
          </section>
        </section>
      </section>
    </>
  );
};

export default SlotGames;
