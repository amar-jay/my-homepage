import Section from "../../components/SectionMotion";
import LinkItem from "../../components/layout/LinkItem";
import { Flex, Heading } from "@chakra-ui/react";
const ai = () => {
  return (
    <Section delay={"0.1"}>
      <Heading>AI & Data Science Section</Heading>
      <Flex flexDir={"column"} minH={"50vw"} maxH={"100%"}>
        <LinkItem href="/ai/davinci" passHref path="/ai/davinci">
          Try Out Open AI Davinci
        </LinkItem>
      </Flex>
    </Section>
  );
};
export default ai;
