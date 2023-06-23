const Wrapper = ({ children, commonPadding, removePadding }) => {
  return (
    <main
      className="bg-single-bg min-h-screen min-w-screen h-screen m-0"
    >
      {/* <main
      className={`bg-single-bg min-h-screen min-w-screen h-screen m-0 ${
        // commonPadding && "max-[1024px]: "
        commonPadding && " pt-[90px] pb-[195px] flex max-[1024px]:pb-0 max-[1024px]:pt-[0px]"
      }`}
    > */}
      {children}
    </main>
  );
};

export default Wrapper;
