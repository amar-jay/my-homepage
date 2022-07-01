// import "../styles/globals.css";
import type { AppProps } from "next/app";
import MainLayout from "../components/layout/Main";
// import Fonts from "../components/Fonts";
import Chakra from "../components/chakra";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Chakra cookies={pageProps.cookies}>
      {/* {!!Fonts && <Fonts />} */}
      <MainLayout router={router}>
        <AnimatePresence
          exitBeforeEnter
          initial={true}
          onExitComplete={() => {
            if (typeof window !== "undefined") {
              window.scrollTo({ top: 0 });
            }
          }}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </MainLayout>
    </Chakra>
  );
}

export default MyApp;
