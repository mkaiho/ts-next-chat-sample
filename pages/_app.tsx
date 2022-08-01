import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextPageWithLayout } from ".";
import { CssBaseline } from "@mui/material";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
