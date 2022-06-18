import {
  Box,
  Container,
  Heading,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import NextImage from "next/image";

const Home: NextPage = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue("purple.700", "purple.300")}
        p={3}
        mb={6}
        textAlign="center"
      >
        Hello Welcome 😁!!. I am a software engineer. I am currently living in
        Istanbul, Turkey.
      </Box>
      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Amar Jay {useColorModeValue("🍀", "👿")}
          </Heading>
          <p>A Maverick ( Solo Frontend Developer, Designer, Photographer ) </p>
        </Box>

        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ ml: 6 }}
          textAlign="center"
        >
          <Image
            borderColor={useColorModeValue("purple.700", "purple.300")}
            borderWidth={3}
            borderStyle="solid"
            width="100px"
            borderRadius={"50%"}
            height={"100px"}
            display="inline-block"
            src={`/images/dye-${useColorModeValue("0", "1")}.jpg`}
            alt="Profile Image"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
