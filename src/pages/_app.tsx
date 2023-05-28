// import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import MainLayout from "../components/layout/Main";
// import Fonts from "../components/Fonts";
import Chakra from "../components/chakra";
import { AnimatePresence } from "framer-motion";

if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual";
}

function MyApp({ Component, pageProps, router }: AppProps) {
  const [cookie, setCookie] = useState<any>(null);
  useEffect(
    () => {
      if (pageProps) {
        if (pageProps?.cookie)
          setCookie(pageProps.cookie)
      }
    },
  [pageProps]
  );
  return (
    <Chakra cookies={cookie as any}>
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
