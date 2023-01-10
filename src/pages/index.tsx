import React from "react";
import {
  Box,
  Container,
  Heading,
  useColorModeValue,
  Image,
  Text,
  Button,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { BiMusic, BiMoviePlay, BiBook, BiPen } from "react-icons/bi";
import { ChevronRightIcon } from "@chakra-ui/icons";
import type { NextPage } from "next";
import Section from "../components/SectionMotion";
import Paragraph from "../components/layout/Paragraph";
import BodyLink from "../components/layout/BodyLink";
import { IconContainer } from "../components/layout/IconContainer";
import NextLink from "next/link";

const Home: NextPage = () => {
  return (
    <Container paddingTop={20}>
      <Box display={{ md: "flex" }}>
        <Box flexGrow={1} alignItems={"center"} justifyContent={"center"}>
          <Heading as="h1" variant="page-title">
            Amar Jay {useColorModeValue("🤏", "👊")}
          </Heading>
          <Text>Abdel Manan</Text>
          <Text>(Software Dev, Student ) </Text>
        </Box>

        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ ml: 6 }}
          textAlign="center"
        >
          <Image
            borderColor={useColorModeValue("purple.700", "#395B64")}
            borderWidth={3}
            borderStyle="solid"
            width="175px"
            borderRadius={"50%"}
            // cursor={"pointer"}
            height={"175px"}
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
        </Paragraph>

        <Heading as="h3" variant="section-title" mt={{ base: 5, md: 10 }}>
          Work
        </Heading>
        <Paragraph>
          I am a software developer specialised in web development. I am
          passionate about innovation and applying creativity in a business that
          makes a meaningful difference to the world. I am fallible like all
          humans and like to confront my mistakes. I am open to varied opinions,
          advice or disapproval about me and my work. Techhnologies that I am
          most proficient in are{" "}
          <BodyLink link={"https://www.react.com"}> ReactJS</BodyLink>,{" "}
          <BodyLink link={"https://www.nextjs.org"}>TypeScript</BodyLink>,{" "}
          <BodyLink link={"https://postgresql.org/"}>Go</BodyLink>,{" "}
          <BodyLink link={"https://node.org/"}> NodeJS </BodyLink>,{" "}
          <BodyLink link={"https://graphql.org/"}> & GraphQL </BodyLink>
        </Paragraph>
        <Box textAlign={"center"} my={4}>
          <NextLink
            href={"https://github.com/amar-jay/"}
            passHref
            scroll={false}
          >
            <Button rightIcon={<ChevronRightIcon />} colorScheme={"whatsapp"}>
              Experience & Projects
            </Button>
          </NextLink>
        </Box>

        <Heading
          as="h3"
          variant="section-title"
          mb={5}
          mt={{ base: 5, md: 15 }}
        >
          Passions
        </Heading>
        <Paragraph>
          <UnorderedList listStyleType={"none"}>
            <ListItem>
              <IconContainer
                isRow
                Icon={BiMoviePlay}
                text={"Movies"}
                link={"/"}
              />
            </ListItem>
            <ListItem>
              <IconContainer isRow Icon={BiBook} text={"Reading"} link={"/"} />
            </ListItem>
            <ListItem>
              <IconContainer
                isRow
                Icon={BiPen}
                text={"Writing"}
                link={"https://amanann.medium.com"}
              />
            </ListItem>
            <ListItem>
              <IconContainer
                isRow
                Icon={BiMusic}
                text={"Music"}
                link={
                  "https://open.spotify.com/playlist/04svBjcoYd5Ou6q2h47sBR"
                }
              />
            </ListItem>
          </UnorderedList>
        </Paragraph>
        <Heading variant="section-title" marginTop={5}>
          Contact
        </Heading>
        <Box textAlign={"center"} my={4}>
          <NextLink href={"/contact-info"} passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme={"whatsapp"}>
              Reach me on
            </Button>
          </NextLink>
        </Box>
        {/* <ContactContainer /> */}
      </Section>
    </Container>
  );
};

export default Home;
