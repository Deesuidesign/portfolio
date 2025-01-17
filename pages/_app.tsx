// pages/_app.tsx

import { AppProps } from "next/app";
import { GoogleAnalytics } from '@next/third-parties/google'
import "../styles/global.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics gaId="G-KCJKXEWGL4" />
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}

export default MyApp;
