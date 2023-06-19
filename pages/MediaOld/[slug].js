import { useRouter } from "next/router";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const New = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <Header />
      <section className="bg-[#202123] py-[100px] ">
        <section className="container mx-auto ">
          <img src="/Images/Media/NewsPage/event1.jpeg" />
        </section>
      </section>
      <Footer />
    </>
  );
};

export default New;
