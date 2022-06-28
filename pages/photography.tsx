import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import Paragraph from "../components/layout/Paragraph";
import Section from "../components/SectionMotion";

function photography() {
  return (
    <Section delay={"0.2"}>
      <Heading textAlign={"center"} variant="section-title">
        ❗Photography Page Not Available
      </Heading>
      <Paragraph>
        This website is still under production. You may return later 😁
      </Paragraph>
    </Section>
  );
}

export default photography;
