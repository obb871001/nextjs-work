const IconTextBox = ({ icon, main, content }) => {
  return (
    <div className="flex flex-col items-center text-white mb-[100px] max-[1024px]:mb-[50px]">
      {icon}
      <p className="text-center text-[50px] mb-[20px] max-[1024px]:text-xl">
        {main}
      </p>
      <p className="text-center mx-auto w-[70%] max-[1024px]:text-sm">
        {content}{" "}
      </p>
    </div>
  );
};

export default IconTextBox;
