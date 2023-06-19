const BoxTitle = ({ title, content, white }) => {
  return (
    <div className={`${white && "text-white"} max-[1024px]:px-[20px]`}>
      <p
        className={`text-[50px] font-medium mb-[40px] text-center leader-[40px] team-border max-[1024px]:text-xl`}
      >
        {title}
      </p>
      <p className="text-center w-[100%] mb-[80px] max-[1024px]:mb-[40px] mx-auto max-[1024px]:text-sm">
        {content}
      </p>
    </div>
  );
};

export default BoxTitle;
