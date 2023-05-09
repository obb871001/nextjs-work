import EventBox from "@/pages/components/EventBox/EventBox";
import BoxTitle from "@/pages/components/IconTextBox/BoxTitle";

const EVENTS_LIST = [
  {
    title: "East & West Virtual Expo: New Wave",
    time: "2021.06.01 - 2021.06.01",
    src: "event1",
  },
  {
    title: "聖誕免費遊戲賞",
    time: "2020.12.21 - 2020.12.28",
    src: "event2",
  },
  {
    title: "East & West Virtual Expo",
    time: "2020.12.08 - 2020.12.09",
    src: "event3",
  },
  {
    title: "ICE2020",
    time: "2020.02.04 - 2020.02.06",
    src: "event4",
  },
];

const Events = () => {
  return (
    <>
      <main className="min-h-screen w-full max-[640px]:pt-[100px] pt-[200px] pb-[50px] bg-[#202123]">
        <section className="container mx-auto flex flex-col items-center">
          <BoxTitle
            white
            title="活動消息"
            content="查閱所有 Eazy Gaming 參與過的展覽活動或舉辦過的推廣活動"
          />
          <div className="h-[3px] w-full bg-red-500 my-[40px]"></div>
          <section className="grid grid-cols-3 max-[640px]:grid-cols-1 gap-4 w-full my-[40px]">
            {EVENTS_LIST.map((events, index) => {
              return (
                <EventBox
                  KEY={index}
                  imageSrc={`/Images/Events/${events.src}.jpeg`}
                  title={events.title}
                  time={events.time}
                />
              );
            })}
          </section>
        </section>
      </main>
    </>
  );
};

export default Events;
