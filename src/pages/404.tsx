import { Flex, Heading } from "@chakra-ui/react";
import Section from "../components/SectionMotion";

const _404 = () => {
  return (
    <Section delay="0.2s">
      <Flex alignItems="center"></Flex>
      <Heading marginBottom={3}>❗{window.origin?.location.split("/").pop()} Page Not Available</Heading>
    </Section>
  );
}

export default _404;