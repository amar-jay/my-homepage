
import { Flex, Heading } from "@chakra-ui/react";
import Section from "../components/SectionMotion";
function books() {
  return (
    <Section delay="0.2s">
      <Flex alignItems="center"></Flex>
      <Heading marginBottom={3}>❗Page Does not exist </Heading>
    </Section>
  );
}

export default books;
