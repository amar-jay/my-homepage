import { Container, Grid, GridItem, Heading } from "@chakra-ui/react";
import React from "react";
import Card from "../components/layout/Card";
import GithubInfoCard from "../components/layout/GithubInfoCard";
import Section from "../components/SectionMotion";

function projects() {
  return (
    <Section delay="0.2">
      <Heading variant={"section-title"}>👨‍🏭 Works</Heading>
      <GithubInfoCard />
      <Container pt={5}>
        <Grid gap={3} gridColumn={2}>
          <GridItem>
            <Card
              imgUrl="/images/carousel/movie-icon.jpg"
              heading="Amar Movies"
              desc="A free netflix-like app"
              link={"https://amar-film-git-dev-amar-jay.vercel.app/"}
            />
          </GridItem>{" "}
          <GridItem>
            <Card
              imgUrl="/images/carousel/movie-icon.jpg"
              heading="Turkish Traslator"
              desc="A turkish translation package"
              link={"https://www.npmjs.org/turkish-translator"}
            />
          </GridItem>{" "}
          <GridItem>
            <Card
              imgUrl="/images/carousel/movie-icon.jpg"
              heading="Open Epub"
              desc="Open of Epubs in Browser"
              link="https://www.github.com/amar-jay/first-epub"
            />
          </GridItem>
        </Grid>
      </Container>
    </Section>
  );
}

export default projects;
