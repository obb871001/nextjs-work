import { CONTACT_ICON } from "@/constants";
import ShareButton from "../../components/Footer/ShareButton";

const ContactUs = () => {
  return (
    <>
      <section className="w-full bg-[#11100E] pt-[150px] pb-[100px]  max-[640px]:px-[20px]">
        <section className="container mx-auto">
          <div className="md:w-[400px] lg:ml-auto mr-auto text-white">
            <p className="text-[45px] font-medium contact-us-text mb-[40px]">
              聯絡我們
            </p>
            <p>說出您的想法！我們樂於聆聽。</p>
          </div>
        </section>
      </section>
      <section className="bg-[url(/Images/Events/bg.jpeg)] py-[50px] lg:min-h-[80vh] bg-center bg-cover max-[640px]:px-[20px]">
        <section className="container mx-auto text-white">
          <p className="text-[45px] font-medium contact-us-text-left mb-[60px]">
            通訊互動
          </p>
          <div className="grid grid-cols-2  md:w-[400px]">
            <ShareButton />
            {/* {CONTACT_ICON.map((contact, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center mb-[60px] cursor-pointer group"
                >
                  <img
                    alt="image"
                    key={index}
                    className="w-[40px] h-[40px] object-cover mr-[10px] group-hover:scale-110 transition duration-300"
                    src={`/Images/footer/contact_icon/${contact}.png`}
                  />
                  <p className="text-xl group-hover:scale-110 transition duration-300">
                    {contact}
                  </p>
                </div>
              );
            })} */}
          </div>
        </section>
      </section>
    </>
  );
};

export default ContactUs;
