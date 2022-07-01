import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import MainLayout from "../components/layout/Main";
import theme from "../libs/theme";
import Fonts from "../components/Fonts";
import Chakra from "../components/chakra";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Chakra cookies={pageProps.cookies}>
      {/* {!!Fonts && <Fonts />} */}
      <MainLayout
        router={router}
        exitBeforeEnter
        initial={true}
        onExitComplete={() => {
          if (typeof window !== "undefined") {
            window.scrollTo({ top: 0 });
          }
        }}
      >
        <Component {...pageProps} key={router.route} />
      </MainLayout>
    </Chakra>
  );
}

export default MyApp;
