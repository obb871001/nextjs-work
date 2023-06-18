import React from "react";
import ContactInput from "./ContactInput";
import ContactUsNew from "./ContactUsNew";

const FooterNew = () => {
  return (
    <footer className="absolute bottom-0 ml-[12%] z-[2] max-[640px]:ml-auto">
      {/* <ContactInput /> */}
      <ContactUsNew />
    </footer>
  );
};

export default FooterNew;
