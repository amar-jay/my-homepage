import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import MainLayout from "../components/layout/Main";
import theme from "../libs/theme";
// 3. extend the theme
function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <MainLayout router={router}>
        <Component {...pageProps} key={router.route} />
      </MainLayout>
    </ChakraProvider>
  );
}

export default MyApp;
