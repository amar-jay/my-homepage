import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import MainLayout from "../components/layout/Main";
import theme from "../libs/theme";
import Fonts from "../components/Fonts";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      {/* <Fonts /> */}
      <MainLayout router={router}>
        <Component {...pageProps} key={router.route} />
      </MainLayout>
    </ChakraProvider>
  );
}

export default MyApp;
