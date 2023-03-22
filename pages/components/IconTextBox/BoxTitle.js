const BoxTitle = ({ title, content, white }) => {
  return (
    <div className={`${white && "text-white"} max-[640px]:px-[20px]`}>
      <p
        className={`text-[50px] font-medium mb-[40px] text-center leader-[40px] team-border max-[640px]:text-xl`}
      >
        {title}
      </p>
      <p className="text-center w-[100%] mb-[80px] max-[640px]:mb-[40px] mx-auto max-[640px]:text-sm">
        {content}
      </p>
    </div>
  );
};

export default BoxTitle;
