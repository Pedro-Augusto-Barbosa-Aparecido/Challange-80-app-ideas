import '../styles/globals.css'
import "../styles/Home/home.css";

import Head from "next/head";
import Header from "./components/Header";
import {useEffect, useState} from "react";

import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
    const router = useRouter();

    useEffect(() => {
        document.addEventListener("logged", async (ev) => {
            await router.push("/");
            router.reload();

        });

    }, []);

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
