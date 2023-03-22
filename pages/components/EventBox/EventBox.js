const EventBox = ({ KEY, imageSrc, title, time, width, textCenter }) => {
  return (
    <div
      key={KEY}
      className="flex flex-col items-center cursor-pointer group lg:h-[400px]  mb-[30px]"
    >
      <img
        alt="image"
        src={imageSrc}
        className="w-[310px] h-[218px] object-cover mb-[20px] group-hover:scale-105 transition duration-300 border-red-500 group-hover:border-b-2"
      />
      <div className="flex flex-col items-center justify-between max-[640px]:text-center">
        <p
          className={`special-font text-white text-2xl max-[640px]:text-xl ${
            textCenter && "text-center"
          } ${width ? width : "w-[60%]"} mb-[15px]`}
        >
          {title}
        </p>
        <p className="special-font text-left text-white text-[#ada3a3] max-[640px]:text-sm mb-[20px] group-hover:text-white group-hover:bg-red-500 transition duration-300">
          {time}
        </p>
      </div>
    </div>
  );
};

export default EventBox;
