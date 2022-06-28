import { Container, Heading } from "@chakra-ui/react";
import React from "react";
import Card from "../components/layout/GithubInfoCard";
import Paragraph from "../components/layout/Paragraph";
import Section from "../components/SectionMotion";

function projects() {
  return (
    <Section delay="0.2">
      <Heading variant={"section-title"}>👨‍🏭 Works</Heading>
      <Card />
      <Container pt={5}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
        voluptatibus nisi quasi molestias nesciunt id natus at nemo reiciendis
        placeat perferendis deserunt rem, ab doloremque deleniti laboriosam.
        Eius, repellendus unde?
      </Container>
    </Section>
  );
}

export default projects;
