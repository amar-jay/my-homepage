import { Flex, Heading } from "@chakra-ui/react";
import Section from "../components/SectionMotion";

export default () => {
  return (
    <Section delay="0.2s">
      <Flex alignItems="center"></Flex>
      <Heading marginBottom={3}>❗{window.origin?.location.split("/").pop()} Page Not Available</Heading>
    </Section>
  );
}