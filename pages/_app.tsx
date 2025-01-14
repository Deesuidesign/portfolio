// pages/_app.tsx

import { AppProps } from "next/app";
import { GoogleTagManager } from '@next/third-parties/google'
import "../styles/global.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer />
      <GoogleTagManager gtmId="G-KCJKXEWGL4" />
    </>
  );
}

export default MyApp;
