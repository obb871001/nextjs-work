import React from "react";
import ContactInput from "./ContactInput";
import ContactUsNew from "./ContactUsNew";

const FooterNew = () => {
  return (
    <footer className="fixed bottom-0 z-[2] max-[1024px]:ml-auto max-[1024px]:w-full max-[1024px]:flex max-[1024px]:justify-center">
      {/* <ContactInput /> */}
      <ContactUsNew />
    </footer>
  );
};

export default FooterNew;
