import "../styles/globals.css";
import "../styles/fonts.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import PageLoading from "./components/PageLoading/PageLoading";
import Head from "next/head";

const App = ({ Component, pageProps }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Eazy Gaming</title>
      </Head>
      {loading && <PageLoading />}
      <Component {...pageProps} />
    </>
  );
};
export default App;
