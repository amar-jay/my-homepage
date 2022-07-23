import React from 'react'
import { ColorModeScript } from "@chakra-ui/react";
import NextDocumnet, { Html, Head, Main, NextScript } from "next/document";
import theme from "../../libs/theme";

export default class Document extends NextDocumnet {
  render(): JSX.Element {
    return (
      <Html lang={"en"}>
        <Head />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
