import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { Router } from "next/router";
import NavBar from "./NavBar";
import VoxelPCLoader from "../Voxel3d-Loader";
import Footer from "./Footer";

const LazyVoxelPC = dynamic(() => import("../Voxel3d_1"), {
  ssr: false,
  loading: () => <VoxelPCLoader />,
});

const Main: React.FC<{
  children: JSX.Element;
  router: Router;
}> = ({ children, router }) => {
  return (
    <Box as="main" p={0}>
      <Head>
        <title>Abdel-manan Abdel-rahman</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Abdel Manan's Site" />
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
        <LazyVoxelPC />
        {children}

        <Footer />
      </Container>
    </Box>
  );
};

export default Main;
