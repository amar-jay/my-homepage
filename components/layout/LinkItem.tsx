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
  const activeColor = useColorModeValue("#000", "#fff");
  return (
    <NextLink href={href} passHref={passHref}>
      <Link
        {...props}
        paddingY={4}
        paddingX={4}
        m={0.5}
        color={active ? activeColor : inactiveColor}
        fontWeight={active ? "bold" : "normal"}
        borderRadius="lg"
        transition="all 0.2s ease-in-out"
        _hover={{
          textDecoration: "none",
        }}
      >
        {children}
      </Link>
    </NextLink>
  );
};

export default LinkItem;
