import "../styles/globals.css";
import '../styles/fonts.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import PageLoading from './components/PageLoading/PageLoading';

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, []);
  return (
    <>
      {loading && <PageLoading />}
      <Component {...pageProps} />
    </>
  );
}
