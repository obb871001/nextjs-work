const Wrapper = ({ children, commonPadding }) => {
  return (
    <main
      className={`bg-single-bg min-h-screen min-w-screen ${
        commonPadding && "pl-[12%] pt-[90px] pb-[195px] flex "
      }`}
    >
      {children}
    </main>
  );
};

export default Wrapper;
