import Head from "next/head";

// Components
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";

// Styles
import style from "./Layout.module.scss";

const Layout = ({ children, branding, coverData }) => {
  return (
    <>
      <Head>
        <title>{branding.blogTitle}</title>
        <link rel="icon" href={process.env.API_HOST_PUBLIC + branding.favicon.url} />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={style.layout}>
        <Header logo={branding.logo} />
        <Main coverData={coverData}>{children}</Main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
