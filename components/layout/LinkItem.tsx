import { Link, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";

const LinkItem: React.FC<{
  href: string;
  path?: string;
  children: string;
  passHref?: boolean;
  [prop: string]: any;
}> = ({ href, path, children, passHref, ...props }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("purple.700", "purple.300");
  return (
    <NextLink href={href} passHref={passHref}>
      <Link
        {...props}
        paddingY={4}
        paddingX={4}
        m={0.5}
        color={active ? "#ffffff" : inactiveColor}
        fontWeight={active ? "bold" : "normal"}
        bg={active ? "purple.700" : ""}
        borderRadius="lg"
        transition="all 0.2s ease-in-out"
        _hover={{
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        {children}
      </Link>
    </NextLink>
  );
};

export default LinkItem;
