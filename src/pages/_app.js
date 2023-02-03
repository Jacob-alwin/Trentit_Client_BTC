import "@/styles/globals.scss";
import { Fragment } from "react";
import Header from "./header";
import Footer from "./footer";
import store from "@/redux/store";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient();
  return (
    <Fragment>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Header />
          <Component {...pageProps} />
          <Footer />
          <ReactQueryDevtools/>
        </QueryClientProvider>
      </Provider>
    </Fragment>
  );
}
