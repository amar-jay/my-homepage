import React from 'react'
import {
  Box,
  Container,
  Heading,
  useColorModeValue,
  Image,
  Text,
  Button,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import type { NextPage } from "next";
import Section from "../components/SectionMotion";
import Paragraph from "../components/layout/Paragraph";
import BodyLink from "../components/layout/BodyLink";
import ContactContainer from "../components/layout/ContactContainer";
import NextLink from "next/link";

const Home: NextPage = () => {
  return (
    <Container paddingY={5} minW={"60%"} maxW={"2xl"}>
     <Box display={{ md: "flex" }}>
        <Box flexGrow={1} alignItems={"center"} justifyContent={"center"}>
          <Heading as="h1" variant="page-title">
            Amar Jay {useColorModeValue("🤏", "👊")}
          </Heading>
          <Text>Abdel Manan</Text>
          <Text>(Freelance Web Dev, Designer, Photographer) </Text>
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
            width="210px"
            borderRadius={"50%"}
            // cursor={"pointer"}
            height={"210px"}
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

        <Heading as="h3" variant="section-title" mt={{ base: 5, md: 10 }}>
          Passions
        </Heading>
        <Paragraph>
          Problem solving is one thing I face daily, and it is the thing I am
          willing to encounter in order to both, help society, as well as
          myself. Challenges tempt me so much. Being creative and innovative is
          my hobby. I also like to <BodyLink link={""}>Watch Movies</BodyLink>,
          <BodyLink link={""}> Read</BodyLink> and take{" "}
          <BodyLink link={"/photography"}> Photographs</BodyLink>. But most
          importantly, to make the world a better place
        </Paragraph>
        <ContactContainer />
      </Section>
    </Container>
  );
};

export default Home;
