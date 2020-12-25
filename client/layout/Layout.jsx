import React from "react";
import Head from "next/head";

import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Blog de gera</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
