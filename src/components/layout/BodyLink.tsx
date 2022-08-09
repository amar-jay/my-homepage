import { Link, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";

const BodyLink: React.FC<{ children: string; link: string }> = ({
  children,
  link,
}) => (
  <NextLink href={link} passHref>
    <Link
      color={useColorModeValue("#3d7aed", "blue.500")}
      transition="all 0.2s ease-in-out"
      _hover={{
        textDecoration: "underline",
        textDecorationColor: "blue.900",
        textDecorationThickness: 3,
        textUnderlineOffset: 4,
      }}
    >
      {children}
    </Link>
  </NextLink>
);

export default BodyLink;
