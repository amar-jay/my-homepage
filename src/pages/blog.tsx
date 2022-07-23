import { Divider, Flex, Heading, VStack } from "@chakra-ui/react";
import Section from "../components/SectionMotion";
import LinkItem from "../components/layout/LinkItem";
function books() {
  return (
    <Section delay="0.2">
      <Flex alignItems="center"></Flex>
      <Heading marginBottom={3}>📔 Blog</Heading>
      <Divider />
      <VStack justifyContent={"left"}>
        <LinkItem href="/blog/what-is-popping" isCurr={true}>
          What is Popping
        </LinkItem>
        <LinkItem href="/blog/my-story" isCurr={true}>
          Articles
        </LinkItem>
        <LinkItem href="/blog/about-me" isCurr={true}>
          About Me
        </LinkItem>
      </VStack>
    </Section>
  );
}

export default books;
