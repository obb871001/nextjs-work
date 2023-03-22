import { CONTACT_ICON } from "@/constants";
import { Button, Input } from "antd";

const INPUTLIST = [
  { title: "姓名" },
  { title: "電郵" },
  { title: "公司網站" },
  { title: "留言", textarea: true },
  { title: "驗證碼" },
];

const ContactInput = () => {
  return (
    <section
      className="h-screen max-[640px]:h-[auto] max-[640px]:py-[50px] w-screen relative md:!bg-[#BB3741] lg:!bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(0deg, rgba(239, 51, 64, 0.7) 0%, rgba(239, 51, 64, 0.7) 100%), url(/Images/footer/mainfooterbg.jpeg)",
        backgroundPosition: "100% 50%,50% 50%",
        backgroundRepeat: "unset",
        backgroundSize: "50% 100%,cover",
      }}
      // style={{ backgroundImage: `url("/footer/mainfooterbg.jpeg")` }}
    >
      <section className="container h-full mx-auto flex">
        <div className="max-w-[50%] w-full h-full bg-auto bg-right bg-no-repeat flex items-center justify-center bg-[url(/Images/footer/contact_red.svg)] lg:flex hidden">
          <img
            alt="image"
            className="object-cover ml-[100px]"
            src="/Images/footer/modal.png"
          />
        </div>
        <div className="lg:max-w-[50%] md:max-w-[100%] w-full h-full flex flex-col items-center justify-center text-white">
          <p className="text-[50px] contact-after mb-[40px] max-[640px]:text-xl">
            聯絡我們
          </p>
          <section className="lg:w-[400px] md:w-[500px] max-[640px]:w-full mx-auto px-[20px]">
            {INPUTLIST.map((input, index) => {
              return (
                <div className="mb-[20px]" key={index}>
                  <p className="px-[15px] mb-[5px] text-xl">{input.title}</p>
                  {input.textarea ? (
                    <Input.TextArea
                      rows={4}
                      className="rounded-xl py-[0.375rem] px-[0.75rem] h-[40px] text-[1rem] max-[640px]:text-sm max-[640px]:py-[5px] text-[#848484]"
                    />
                  ) : (
                    <Input
                      name="name"
                      className="rounded-3xl py-[0.375rem] px-[0.75rem] h-[40px] text-[1rem] max-[640px]:text-sm max-[640px]:py-[5px] text-[#848484]"
                    />
                  )}
                </div>
              );
            })}
            <div className="w-full flex items-center justify-center my-[20px]">
              <Button
                shape="round"
                size="large"
                className="mx-auto w-[200px] text-white hover:!border-white hover:!text-black hover:bg-white"
              >
                送出
              </Button>
            </div>
            <div className="flex items-center justify-center">
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
            </div>
          </section>
        </div>
      </section>
    </section>
  );
};

export default ContactInput;
