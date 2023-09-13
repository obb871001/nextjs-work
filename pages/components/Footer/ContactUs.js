import { Button, Input } from "antd";
import { CONTACT_ICON, CONTACT_LIST, COOPERATION } from "@/constants";
import { RxTriangleUp, RxTriangleDown } from "react-icons/rx";

const ContactUs = () => {
  return (
    <section className="bg-[#202123] pt-[5.5rem] pb-[7.5rem] max-[640px]:py-[50px] flex flex-col items-center">
      <div className="text-[40px] text-white mb-[40px]">
      <img
              src="https://egslot.net/Images/logo/EG-LOGO.webp"
              alt="Eazy Gaming"
              className="w-[155px] h-[48px] max-[1024px]:w-[100px] max-[1024px]:h-[31px]"
            />
      </div>
      <section className="flex items-center justify-center mb-[40px] max-[640px]:grid max-[640px]:grid-cols-3 max-[640px]:gap-4">
        {CONTACT_LIST.map((contactList, index) => {
          return (
            <div
              className="mr-[40px] max-[640px]:mx-auto flex flex-col self-start"
              key={index}
            >
              <p className="text-red-600 text-lg mb-[10px] tracking-wider text-center cursor-pointer">
                {contactList.main}
              </p>
              <div>
                {contactList?.list &&
                  contactList?.list.map((children, key) => {
                    return (
                      <p
                        key={key}
                        className="text-[#848484] mb-[5px] text-sm text-center hover:text-white transition duration-500 footer-text-bottom cursor-pointer"
                      >
                        {children.text}
                      </p>
                    );
                  })}
              </div>
            </div>
          );
        })}
      </section>
      <section className="flex items-center justify-center mb-[40px] max-[640px]:flex-col">
        <p className="text-[#848484] mr-[10px] max-[640px]:mb-[20px] max-[640px]:text-lg">
          訂閱電子通訊
        </p>
        <div className="w-[300px] relative">
          <Input
            className="rounded-3xl border border-red-500 py-[7px]"
            placeholder="電郵地址"
          />
          <Button
            className="absolute right-0 top-0 w-[120px] h-full"
            shape="round"
            type="primary"
            danger
          >
            訂閱
          </Button>
        </div>
      </section>
      <section className="flex items-center justify-center mb-[40px]">
        {CONTACT_ICON.map((icon, index) => {
          return (
            <img
              alt="image"
              key={index}
              className="w-[32px] h-[32px] object-cover mr-[10px]"
              src={`/Images/footer/contact_icon/${icon}.png`}
            />
          );
        })}
      </section>
      <section className="flex items-center justify-center mb-[40px]">
        {COOPERATION.map((icon, index) => {
          return (
            <img
              alt="image"
              key={index}
              className="w-[100px] h-[50px] object-contain mr-[10px]"
              src={`/Images/footer/cooperation/${icon}.png`}
            />
          );
        })}
      </section>
      <p className="text-[#848484] text-xs text-center my-[40px]">
        Copyright © 2023 Eazy Gaming. All Rights Reserved.
      </p>
      <section>
        <section className="bg-[#ff4d4f] rounded-3xl flex">
          <Button
            shape="round"
            type="primary"
            danger
            className="w-[125px] flex items-center relative p-[1px] hover:!bg-[#ff4d4f] group"
          >
            <RxTriangleUp className="text-xl mr-[10px] group-hover:-translate-y-[5px] transition duration-500" />
            回到首頁
          </Button>
          <Button
            className="flex items-center w-[125px] bg-white text-[#848484]"
            shape="round"
            type="primary"
          >
            繁體中文
            <RxTriangleDown className="text-xl ml-[15px]" />
          </Button>
        </section>
      </section>
    </section>
  );
};

export default ContactUs;
