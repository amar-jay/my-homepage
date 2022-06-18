import { Box, Container, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
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
          <p>A Maverick (A Solo Front Developer, Artist, Photographer ) </p>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
