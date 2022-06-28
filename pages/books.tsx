import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Paragraph from "../components/layout/Paragraph";
import Section from "../components/SectionMotion";
import Card from "../components/layout/GithubInfoCard";
import { DataStruct } from "./api/fetch";
function books() {
  return (
    <Section delay="0.2s">
      <Flex alignItems="center">
        <Card />
      </Flex>
      <Heading marginBottom={3}>❗Books Page Not Available</Heading>
    </Section>
  );
}

export default books;
