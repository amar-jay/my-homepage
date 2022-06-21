import {
  Box,
  Container,
  Heading,
  useColorModeValue,
  Image,
  Link,
  Button,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import type { NextPage } from "next";
import Section from "../components/Section";
import Paragraph from "../components/layout/Paragraph";
import Footer from "../components/layout/Footer";
import NextLink from "next/link";

const BodyLink: React.FC<{ children: string; link: string }> = ({
  children,
  link,
}) => (
  <NextLink href={link} passHref>
    <Link
      color={useColorModeValue("#3d7aed", "violet")}
      transition="all 0.2s ease-in-out"
      _hover={{
        textDecoration: "underline",
        textDecorationColor: "#9c27b0",
        textDecorationThickness: 3,
        textUnderlineOffset: 4,
      }}
    >
      {children}
    </Link>
  </NextLink>
);
const Home: NextPage = () => {
  return (
    <Container paddingY={5}>
      <Box
        borderRadius="lg"
        bg={useColorModeValue("purple.700", "purple.300")}
        p={3}
        mb={6}
        textAlign="center"
      >
        Hello Welcome 😁!!. I am a software engineer currently living in
        Istanbul.
      </Box>
      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Amar Jay {useColorModeValue("🍀", "👿")}
          </Heading>
          <p>A Maverick</p>
          <p>(Freelance Web Dev, Designer, Photographer) </p>
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
            src={`/images/profile.webp`}
            alt="Profile Image"
          />
        </Box>
      </Box>
      <Section delay="0.1">
        <Heading as="h3" variant="section-title" mt={{ base: 5, md: 10 }}>
          Bio
        </Heading>
        <Paragraph>
          I am Abdel-manan Abdel-rahman, born and raised in Accra, Ghana.
          Attended High School at{" "}
          <BodyLink link={"https://mfantsipim.com/"}>
            Mfantsipim School
          </BodyLink>{" "}
          and currently pursuing my Bachelor degree in Electrical and
          Electronics Engineering at{" "}
          <BodyLink link={"https://www.marmara.edu.tr/en"}>
            Marmara Üniversitesi
          </BodyLink>
          . I am an Art, Photography and Engineering enthusiast.
        </Paragraph>
      </Section>

      {/* create box <container  */}
      <Box textAlign={"center"} my={4}>
        <NextLink href={"/contact"} passHref scroll={false}>
          <Button rightIcon={<ChevronRightIcon />} colorScheme={"facebook"}>
            Reach Me
          </Button>
        </NextLink>
      </Box>
      <Section delay="0.1">
        <Heading as="h3" variant="section-title" mt={{ base: 5, md: 10 }}>
          Work
        </Heading>
        <Paragraph>
          A ReactJS & GraphQL with hands-on experience in identifying web-based
          user interactions along with designing & implementing
          highly-responsive user interface. Proficient in translating designs &
          wireframes into high-quality code. Adept at monitoring & maintaining
          application performance, troubleshooting & debugging to bolster
          overall performance. In short, My Stack are{" "}
          <BodyLink link={"https://www.react.com"}> ReactJS & NextJS</BodyLink>{" "}
          and
          <BodyLink link={"https://postgresql.org/"}> Postgresql</BodyLink>
          <BodyLink link={"https://graphql.org/"}> & GraphQL </BodyLink>
          <BodyLink link={"https://nodejs.org/"}>& Nodejs</BodyLink>
        </Paragraph>
        <Box textAlign={"center"} my={4}>
          <NextLink href={"/projects"} passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme={"facebook"}>
              Experience & Projects
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay="0.1">
        <Heading as="h3" variant="section-title" mt={{ base: 5, md: 10 }}>
          Passions
        </Heading>
        <Paragraph>
          Problem solving is one thing I face daily, and it is the thing I am
          willing to encounter in order to both, help society, as well as
          myself. Challenges tempt me so much. Being creative and innovative is
          my hobby. I also like to <BodyLink link={""}>Watch Movies</BodyLink>,
          <BodyLink link={"/books"}> Read</BodyLink> and take{" "}
          <BodyLink link={"/photography"}> Photographes</BodyLink>. But most
          importantly to make the world a better place
        </Paragraph>
      </Section>

      <Footer />
    </Container>
  );
};

export default Home;
