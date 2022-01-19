import '../styles/globals.css'
import "../styles/Home/home.css";


import Head from "next/head";
import Header from "./components/Header";

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Head>
          <title>Home</title>
        </Head>
          <Header />
        <Component {...pageProps} />
      </>
  );
}

export default MyApp
