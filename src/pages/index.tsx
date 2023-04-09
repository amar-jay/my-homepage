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
//import BodyLink from "../components/layout/BodyLink";
import { IconContainer } from "../components/layout/IconContainer";
import NextLink from "next/link";

const data = {
    education: [
    {
        name: "GLISS",
        href: "https://gliss.edu.tr"
    },
    {
        name: "Mfantsipim School",
        href: "https://mfantsipim.com"
    },
    {
        name: "Marmara University",
        href: "https://www.marmara.edu.tr/en"
        }
    ],
    }
const Home: NextPage = () => {
  return (
    <Container paddingTop={20}>
      <Box display={{ md: "flex" }}>
        <Box flexGrow={1} alignItems={"center"} justifyContent={"center"}>
          <Heading as="h1" variant="page-title">
            Amar Jay {useColorModeValue("🙃", "🙂")}
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
          Hi,
        </Heading>
        <Paragraph>
        I am a young and passionate individual with a deep interest in entrepreneurship, software development, and artificial intelligence. I believe that success requires adaptability and learning from mistakes, which is why I approach every project with humility and a hunger for fresh perspectives.
        </Paragraph>
        <Paragraph>
        Beyond my professional pursuits, I am a caring and empathetic individual who cherishes my relationships with family and friends. I take pride in connecting with others on a personal level and making a positive impact in their lives, whether it{"'"}s through sharing knowledge and support or simply being there for them.
        </Paragraph>
        <Paragraph>
        Driven by purpose and a commitment to excellence, I am always eager to take on new challenges and opportunities for personal and professional growth. With a blend of passion and determination, I strive to make a meaningful difference in the world.
        </Paragraph>
        {
            /*
          and currently pursuing my Bachelor degree in Electrical and
          Electronics Engineering at{" "}
          <BodyLink link={"https://www.marmara.edu.tr/en"}>
            Marmara Üniversitesi
          </BodyLink>
        </Paragraph>
            */
        }

{/*
        <Heading as="h3" variant="section-title" mt={{ base: 5, md: 10 }}>
          About me 
        </Heading>
        <Paragraph>
          <Paragraph>
        <Heading as="h3" variant="card-title" mt={{ base: 5, md: 10 }}>
            <span style={{ fontWeight: '700', fontSize: '20px'}}>
                Education: 
            </span>
        </Heading>
            {" "}
          <UnorderedList listStyleType={"none"}>
            {
                data.education.map(e => {
                    return (
                    <ListItem>
                      <IconContainer
                        isRow
        //                Icon={BiMoviePlay}
                        alignItems={"left"}
                        text={e.name}
                        link={e.href}
                      />
                    </ListItem>
                    )
                    })
                }
          </UnorderedList>
          </Paragraph>
          <BodyLink link={"https://www.react.com"}> ReactJS</BodyLink>,{" "}
          <BodyLink link={"https://www.nextjs.org"}>TypeScript</BodyLink>,{" "}
          <BodyLink link={"https://postgresql.org/"}>Go</BodyLink>,{" "}
          <BodyLink link={"https://node.org/"}> NodeJS </BodyLink>,{" "}
          <BodyLink link={"https://graphql.org/"}> & GraphQL </BodyLink>
        </Paragraph>
        */}
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
                link={"https://links.themanan.me/movies"}
              />
            </ListItem>
            <ListItem>
              <IconContainer isRow
		Icon={BiBook} text={"Reading"} 
		link={"https://links.themanan.me/goodread"} />
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
        {
            /*
        <Heading variant="section-title" marginTop={5}>
          Contact
        </Heading>
             * */
            }
        <Box textAlign={"center"} my={4}>
          <NextLink href={"https://linktr.ee/amar-jay"} passHref scroll={false}>
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
