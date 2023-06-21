const Wrapper = ({ children, commonPadding, removePadding }) => {
  return (
    <main
      className={`bg-single-bg min-h-screen min-w-screen ${
        // commonPadding && "max-[1024px]: "
        commonPadding && " pt-[90px] pb-[195px] flex max-[1024px]:pb-[30%]"
      }`}
    >
      {children}
    </main>
  );
};

export default Wrapper;
