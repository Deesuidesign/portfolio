// pages/_app.tsx

import { AppProps } from "next/app";
import "../styles/global.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
      <ToastContainer />
    </div>
  );
}

export default MyApp;
