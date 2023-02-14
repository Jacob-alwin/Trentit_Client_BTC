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
export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient();

  const router = useRouter();
  const [loading, setloading] = useState(false);
  useEffect(() => {
    var token = localStorage.getItem(LocalStorageKeys.userToken);
    if (!token) {
      router.push("/auth");
      setloading(false);
      return;
    }

    setloading(false);
  }, [router]);

  return (
    <Fragment>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          {!loading ? (
            <>
              <Header />
              <Component {...pageProps} />
              <Footer />
            </>
          ) : (
            <h1>Not Authorized yet You Bitch</h1>
          )}
          <ReactQueryDevtools />
        </QueryClientProvider>
      </Provider>
    </Fragment>
  );
}
