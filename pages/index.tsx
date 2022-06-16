import { Box, Container, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Container>
        <Box borderRadius="lg" bg="blue.700" p={3} mb={6} textAlign="center">
          Hello Welcome 😁!!. I am a software engineer. I am currently living in
          Istanbul, Turkey.
        </Box>
        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Amar Jay 👿
            </Heading>
            <p>A Maverick (A Solo Front Developer, Artist, Developer ) </p>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Home;
