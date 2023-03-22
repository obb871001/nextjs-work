const IconTextBox = ({ icon, main, content }) => {
  return (
    <div className="flex flex-col items-center text-white mb-[100px] max-[640px]:mb-[50px]">
      {icon}
      <p className="text-center text-[50px] mb-[20px] max-[640px]:text-xl">
        {main}
      </p>
      <p className="text-center mx-auto w-[70%] max-[640px]:text-sm">
        {content}{" "}
      </p>
    </div>
  );
};

export default IconTextBox;
