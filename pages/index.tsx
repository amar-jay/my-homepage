import {
  Box,
  Container,
  Heading,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Section from "../components/Section";

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
          <p>A Maverick ( Solo Frontend Dev, Designer, Photographer ) </p>
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
      <Section delay="0.1">
        <Heading as="h3" variant="section-title" mt={{ base: 5, md: 10 }}>
          Bio
        </Heading>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, ad
          ipsa! Ratione esse perferendis veniam enim! Aliquam neque culpa ipsam
          exercitationem itaque soluta voluptas. Ducimus dignissimos expedita
          necessitatibus omnis culpa?
        </p>
      </Section>

      <Section delay="0.1">
        <Heading as="h3" variant="section-title" mt={{ base: 5, md: 10 }}>
          Work
        </Heading>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus,
          tempore enim eum omnis, aspernatur laboriosam sapiente hic alias unde
          sint amet adipisci sit ut rerum architecto sunt iste ipsam maiores?
        </p>
      </Section>

      <Section delay="0.1">
        <Heading as="h3" variant="section-title" mt={{ base: 5, md: 10 }}>
          Passions
        </Heading>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus,
          tempore enim eum omnis, aspernatur laboriosam sapiente hic alias unde
          sint amet adipisci sit ut rerum architecto sunt iste ipsam maiores?
        </p>
      </Section>
    </Container>
  );
};

export default Home;
