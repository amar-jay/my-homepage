import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";
import { Router } from "next/router";
import React from "react";
import NavBar from "./NavBar";

const Main: React.FC<{
  children: JSX.Element;
  router: Router;
}> = ({ children, router }) => {
  return (
    <Box as="main" p={0}>
      <Head>
        <title>Manan Website</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Manan's Site" />
        <meta name="author" content="Abdel-manan Abdel-rahman" />
        <meta name="author" content="Amar Jay" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/bulb.svg" type="image/x-icon" />
        <meta name="twitter:title" content="Abdel-manan A.R." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@amarjay" />
        <meta name="twitter:creator" content="@amarjay" />
        <meta name="twitter:image" content="/dye-0.jpg" />
        <meta property="og:site_name" content="Manan's Site" />
        <meta name="og:title" content="Abdel-manan A.R." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/dye-0.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar path={router.asPath} />
      <Container maxW="container.md" pt={16}>
        {children}
      </Container>
    </Box>
  );
};

export default Main;
