import { Flex, Heading } from "@chakra-ui/react";
import Section from "../components/SectionMotion";
const errorPage = () => {
  return (
    <Section delay="0.2s">
      <Flex alignItems="center"></Flex>
      <Heading marginBottom={3}>❗Error occurred during page rendering</Heading>
    </Section>
  );
}

export default errorPage;