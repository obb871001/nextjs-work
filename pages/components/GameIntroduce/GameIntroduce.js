import { Button } from "antd";

const GameIntroduce = ({ intro, gameBackground, gameIcon, gameModal }) => {
  return (
    <>
      <div
        className={`lg:h-[680px] h-[340px] max-[640px]:mb-[20px] max-[640px]:rounded-xl relative bg-[${gameBackground}] group cursor-pointer flex flex-col justify-end bg-cover bg-center`}
        style={{ backgroundImage: gameBackground }}
      >
        <div
          className={`bg-[${gameModal}] bg-no-repeat h-full bg-bottom absolute w-full`}
          style={{ backgroundSize: "95%", backgroundImage: gameModal }}
        />
        <img
          alt="image"
          className="relative z-[10] w-[400px] mx-auto object-cover -translate-y-[100px] group-hover:-translate-y-[300px] transition duration-1000 lg:block hidden"
          src={gameIcon}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[rgb(0,0,0,0.5)] group-hover:opacity-100 opacity-0 flex flex-col items-center justify-end lg:py-[100px]">
          <p className="text-white text-center px-[10px] mb-[20px] -translate-y-[100px] opacity-0 group-hover:opacity-100 group-hover:translate-y-[-100px] transition duration-1000">
            {intro}
          </p>
          <Button
            size="large"
            className="w-[200px] -translate-y-[100px] opacity-0 group-hover:opacity-100 group-hover:translate-y-[-100px] transition duration-1000"
            shape="round"
            type="primary"
            danger
          >
            了解更多
          </Button>
        </div>
      </div>
    </>
  );
};

export default GameIntroduce;
