import { Container, Text, Heading } from "@chakra-ui/react";
import Paragraph from "../../components/layout/Paragraph";
import NextHead from "next/head";
export default function () {
  return (
    <Container>
      <NextHead>
        <title>About Me</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Who is Manan?" key="title" />
      </NextHead>
      <Heading variant="section-title">Dummy Dumb</Heading>
      <Container>
        <Paragraph>
          Benim adım Abdel-manan. Ben 90 yaşındayım. Ganalıyım
        </Paragraph>
      </Container>
    </Container>
  );
}
