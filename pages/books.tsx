import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import Paragraph from "../components/layout/Paragraph";
import Section from "../components/Section";
function books() {
  return (
    <Section delay="0.2s">
      <Heading marginBottom={3}>❗Books Page Not Available</Heading>
      <Paragraph>
        This website is still under production. You may return later 😁
      </Paragraph>
    </Section>
  );
}

export default books;
