import { Box, Container, Heading, Image } from "@chakra-ui/react";
import Carousel from "framer-motion-carousel";
// import NextImage from "next/image";
import fs from "fs/promises";
import path from "path";
import { cwd } from "process";
import { useCallback, useEffect, useState } from "react";
// const fetchImages = async () => {
//   const files = await fs
//     .readdir(path.join(cwd(), "/public/images/carousel"), "utf-8")
//     .catch((err) => console.error(err));
//   return files!;
// };
const App: React.FC<{ imageUrl: string[] }> = ({ imageUrl }) => {
  // const [images, setImages] = useState<string[]>([]);

  // useCallback(async () => {
  //   const images = await fetchImages();
  //   setImages(images);
  // }, [fetchImages]);
  return (
    <>
      <Container paddingTop={3}>
        <Heading
          as="h3"
          style={{
            textAlign: "center",
            color: "#eee",
            fontWeight: "bolder",
            padding: 6,
          }}
        >
          Some Pics
        </Heading>
        <Carousel autoPlay={false} interval={2} loop={true}>
          {imageUrl.map((item, i) => (
            <Box
              key={i}
              style={{
                position: "relative",
                width: "100vw",
                height: "100vh",
              }}
            >
              <Image
                src={`${item}.jpg`}
                alt={item}
                width={"100%"}
                height={"100%"}
              />
            </Box>
          ))}
        </Carousel>
      </Container>
    </>
  );
};
export default App;
