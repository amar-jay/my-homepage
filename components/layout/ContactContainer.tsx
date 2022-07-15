import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { IconType } from "react-icons";
import {
  BsFacebook,
  BsGithub,
  BsInbox,
  BsInstagram,
  BsTelephone,
  BsTwitter,
} from "react-icons/bs";

const IconContainer: React.FC<{
  Icon: IconType;
  text: string;
  link: string;
}> = ({ Icon, text, link }) => {
  return (
    <NextLink href={link}>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        alignContent={"center"}
        flexDirection={"column"}
        p={3}
        borderRadius={"md"}
        fontSize={"xl"}
        margin={{ base: 2, md: 1 }}
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
function ContactContainer() {
  return (
    <>
      <Heading variant="section-title" marginTop={5}>
        Reach me on
      </Heading>
      <Flex justifyContent={"center"} flexWrap={"wrap"} dir={"column"} mt={10}>
        <IconContainer
          Icon={BsFacebook}
          text={"Facebook"}
          link={"https://facebook.com/profile.php?id=100075527034756"}
        />
        <IconContainer
          Icon={BsTwitter}
          text={"Twitter"}
          link={"https://twitter.com/AbdelmananAbde2"}
        />
        <IconContainer
          Icon={BsGithub}
          text={"Github"}
          link={"https://github.com/amar-jay"}
        />
        <IconContainer
          Icon={BsInstagram}
          text={"Instagram"}
          link={"https://instagram.com"}
        />

        <IconContainer
          Icon={BsInbox}
          text={"Inbox"}
          link={"mailto:me@themanan.me"}
        />

        <IconContainer
          Icon={BsTelephone}
          text={"Phone"}
          link={"tel:+905074405861"}
        />
      </Flex>
    </>
  );
}

export default ContactContainer;
