import { Container, Heading } from "@chakra-ui/react";
import path from "path";
import Carousel from "../components/layout/Carousel";

const globPath = "/images/carousel";
let imagesURL = [
  // "dye-0",
  // "dye-1",
  "istanbul-0",
  "movie-icon",
  "movie-icon-2",
  "istanbul-1",
  "man-0",
  "pattern-0",
  "pattern-1",
  "pattern-2",
];
imagesURL = imagesURL.map((name) => path.join(globPath, name));
const Photography: React.FunctionComponent = () => {
  return (
    <Container w={"100vw"} paddingY={5}>
      <Heading variant={"section-title"}>Carousel</Heading>
      <Carousel imageUrl={imagesURL} />
    </Container>
  );
};

export default Photography;
