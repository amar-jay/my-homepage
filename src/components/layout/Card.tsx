import {
  Flex,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";

const Card: React.FunctionComponent<{
  heading: string;
  desc: string;
  imgUrl: string;
  link: string;
}> = ({ heading, desc, imgUrl, link }) => {
  const Imagestyle = {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    boxShadow: "dark-lg",
  };

  const Boxstyle = {
    width: "30rem",
    padding: "15px",
    borderRadius: "15px",
    boxShadow: "md",
    textShadow: "0 0 20px black",
    // fontWeight: "bold",
    // fontSize: "20px",
  };
  return (
    <Link href={link}>
      <Flex
        style={Boxstyle}
        direction={"column"}
        bgColor={useColorModeValue("#aaa", "#111")}
        width={"20"}
        paddingX={3}
      >
        <Image
          minH={"10rem"}
          width={"100%"}
          height={"100%"}
          src={imgUrl}
          style={Imagestyle}
          alt={imgUrl}
        />
        <Heading as="h2" variant="card-title">
          {heading}
        </Heading>
        <Text color="#ccc">{desc}</Text>
      </Flex>
    </Link>
  );
};

export default Card;
