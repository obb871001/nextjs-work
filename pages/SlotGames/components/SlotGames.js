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
              {/* <Button
                className="w-[200px] !h-[50px]"
                size="large"
                shape="round"
                type="primary"
                danger
              >
                即將推出
              </Button> */}
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
              intro="《魔女煉愛》探索愛情的神秘力量，踏入《 Witch's Love™ 》的魔女小屋，你將目睹奇幻愛情的誕生！ 擅長調製各種藥水的魔女，將她的魔法研究提升到新的高度，愛情魔藥的威力讓每個接觸到它的人都深深著迷。 準備好在這個迷人的遊戲中尋找屬於你的愛情寶藏嗎？"
              gameModal="url(/Images/SlotGames/games/games1Modal.png)"
              gameBackground="url(/Images/SlotGames/games/games1.jpeg)"
              gameIcon="/Images/SlotGames/games/games1Icon.png"
              playGameLink="https://d29juml4m9n88c.cloudfront.net/games/slot/witchlove/?lang=en&curr=usd&hidefps=true&useIFrame=true&hideTxID=true"
            />
            <GameIntroduce
              intro="《甜心女僕》「甜蜜女僕，獨家體驗！」《 Neko Maid™ 》熱情邀請您進入她們的夢幻咖啡廳，讓幸福的魔法環繞著您的每一口美食！女僕們年輕開朗、活潑可愛，她們的細心服務將帶給您無與倫比的關懷與滿足。她們不僅帶給你味蕾的享受，當特殊活動來臨，女僕們將為您帶來可愛的表演，為您的餐點注入滿滿的愛心，讓你沉浸在甜蜜的遊戲體驗中。"
              gameModal="url(/Images/SlotGames/games/games1Modal.png)"
              gameBackground="url(/Images/SlotGames/games/games1.jpeg)"
              gameIcon="/Images/SlotGames/games/games1Icon.png"
              playGameLink="https://d29juml4m9n88c.cloudfront.net/games/slot/nekomaid/?lang=en&curr=usd&hidefps=true&useIFrame=true&hideTxID=true"
            />
            <GameIntroduce
              intro="《辛巴達冒險》「踏上航海之旅，尋找七海的秘寶！」，辛巴達將帶領你穿越七海，探索未知神秘的海洋世界！《 Adventure of Sinbad™ 》中，你與辛巴達一起克服各種危險與魔獸，感受到她的成熟自信和驕傲，並以果敢的態度穿越所有困難，最終尋得稀世珍寶，一同成為名留千史的傳奇冒險家！"
              gameModal="url(/Images/SlotGames/games/games1Modal.png)"
              gameBackground="url(/Images/SlotGames/games/games1.jpeg)"
              gameIcon="/Images/SlotGames/games/games1Icon.png"
              playGameLink="https://d29juml4m9n88c.cloudfront.net/games/slot/adventureofsinbad/?lang=en&curr=usd&hidefps=true&useIFrame=true&hideTxID=true"
            />
            <GameIntroduce
              intro="《足球寶貝》"
              gameModal="url(/Images/SlotGames/games/games1Modal.png)"
              gameBackground="url(/Images/SlotGames/games/games1.jpeg)"
              gameIcon="/Images/SlotGames/games/games1Icon.png"
              playGameLink="https://d29juml4m9n88c.cloudfront.net/games/slot/goallinebaby/?lang=zh-cht&curr=usd&hidefps=true&useIFrame=true&hideTxID=true"
            />
          </section>
        </section>
      </section>
    </>
  );
};

export default SlotGames;
