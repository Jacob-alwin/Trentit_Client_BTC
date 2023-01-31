import "@/styles/globals.scss";
import { Fragment } from "react";
import Header from "./header";
import Footer from "./footer";

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  );
}
