
import { Flex, Heading } from "@chakra-ui/react";
import Section from "../components/SectionMotion";
function _404() {
  return (
    <Section delay="0.2s">
      <Flex alignItems="center">error</Flex>
      <Heading marginBottom={3}>❗Page Does not exist </Heading>
    </Section>
  );
}

export default _404;