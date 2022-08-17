import type { AppProps } from "next/app";
import { wrapper } from "../store/store";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyle from "../globalStyle";
import { SnackbarProvider, useSnackbar } from "notistack";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssBaseline />
      <GlobalStyle />
      <SnackbarProvider
        maxSnack={1}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        autoHideDuration={3500}
      >
        <div id="container">
          <Component {...pageProps} />
        </div>
      </SnackbarProvider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
