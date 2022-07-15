import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Paragraph from "../components/layout/Paragraph";
import Section from "../components/SectionMotion";
import {
  BsFacebook,
  BsTwitter,
  BsGithub,
  BsInstagram,
  BsInbox,
} from "react-icons/bs";
import { IconType } from "react-icons";
import NextLink from "next/link";

const IconContainer: React.FC<{
  Icon: IconType;
  text: string;
  link: string;
  mail?: boolean;
}> = ({ Icon, text, link }) => {
  return (
    <NextLink href={mail ? { link } : `https://${link}`}>
      <Box
        display={{ md: "flex" }}
        alignItems={"center"}
        justifyContent={"center"}
        alignContent={"center"}
        flexDirection={"column"}
        p={4}
        borderRadius={"md"}
        fontSize={"xl"}
        margin={{ base: 2, md: 4 }}
        _hover={{
          cursor: "pointer",
          backgroundColor: "blackAlpha.300",
        }}
      >
        <Icon />
        <Text mt={3} textAlign={"center"}>
          {" "}
          {text}
        </Text>
      </Box>
    </NextLink>
  );
};
function contact() {
  return (
    <Section delay={"0.2"}>
      <Heading variant="section-title" marginTop={5}>
        {" "}
        🔗 Reach me on{" "}
      </Heading>
      <Flex
        justifyContent={"space-around"}
        flexWrap={"wrap"}
        dir={"column"}
        mt={10}
      >
        <IconContainer
          Icon={BsFacebook}
          text={"Facebook"}
          link={"facebook.com/profile.php?id=100075527034756"}
        />
        <IconContainer
          Icon={BsTwitter}
          text={"Twitter"}
          link={"twitter.com/AbdelmananAbde2"}
        />
        <IconContainer
          Icon={BsGithub}
          text={"Github"}
          link={"github.com/amar-jay"}
        />
        <IconContainer
          Icon={BsInstagram}
          text={"Instagram"}
          link={"instagram.com"}
        />

        <IconContainer
          Icon={BsInbox}
          text={"Inbox"}
          link={"mailto:me@themanan.me"}
          mail={true}
        />
      </Flex>
    </Section>
  );
}

export default contact;
