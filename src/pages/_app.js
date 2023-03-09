import "@/styles/globals.scss";
import { Fragment, useEffect, useState } from "react";
import Header from "./header";
import Footer from "./footer";
import store from "@/redux/store";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useRouter } from "next/router";
import { LocalStorageKeys } from "@/core/localStorageKeys";
import Head from "next/head";
export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient();
  const router = useRouter();
  // var token = localStorage.getItem(LocalStorageKeys.userToken);

  // useEffect(() => {
  //   // console.log("router", router);
  //   var token = localStorage.getItem(LocalStorageKeys.userToken);
  //   if (!token) {
  //     // router.push("/auth");
  //     // setloading(false);
  //     // <AuthModel val={true} />;
  //     // return;
  //   }
  //   // setloading(false);
  // }, [router]);

  return (
    <Fragment>
      <Head>
        <title>Trentit - Refurbished Sellers</title>
        <meta name="description" content="Trentit - Refurbished Sellers" />

        <meta property="og:title" content="Trentit - Refurbished Sellers" />
        <meta
          property="og:description"
          content="Trentit - Refurbished Sellers"
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://trentit.vercel.app/" />
      </Head>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <>
            <Header />

            <Component {...pageProps} />
            <Footer />
          </>

          <ReactQueryDevtools />
        </QueryClientProvider>
      </Provider>
    </Fragment>
  );
}
