import { Flex, Heading } from "@chakra-ui/react";
import {
  BsFacebook,
  BsTwitter,
  BsGithub,
  BsInstagram,
  BsInbox,
  BsTelephone,
} from "react-icons/bs";
import { IconContainer } from "../components/layout/IconContainer";
import Section from "../components/SectionMotion";
function books() {
  return (
    <Section delay="0.2s">
      <Heading variant="section-title" marginTop={5} marginBottom={3}>
        {" "}
        Reach me on{" "}
      </Heading>
      <Flex
        justifyContent={"space-between"}
        flexDir={"column"}
        flexWrap={"wrap"}
        mt={10}
      >
        <IconContainer
          spaceBetween
          isRow
          size={"2xl"}
          Icon={BsFacebook}
          text={"Facebook"}
          link={"https://facebook.com/profile.php?id=100075527034756"}
        />
        <IconContainer
          spaceBetween
          isRow
          Icon={BsTwitter}
          text={"Twitter"}
          link={"https://twitter.com/AbdelmananAbde2"}
        />
        <IconContainer
          spaceBetween
          isRow
          Icon={BsGithub}
          text={"Github"}
          link={"https://github.com/amar-jay"}
        />
        <IconContainer
          isRow
          spaceBetween
          Icon={BsInstagram}
          text={"Instagram"}
          link={"https://instagram.com"}
        />

        <IconContainer
          isRow
          spaceBetween
          Icon={BsInbox}
          text={"Inbox"}
          link={"mailto:me@themanan.me"}
        />

        <IconContainer
          isRow
          spaceBetween
          Icon={BsTelephone}
          text={"Phone"}
          link={"tel:+905074405861"}
        />
      </Flex>
    </Section>
  );
}

export default books;
