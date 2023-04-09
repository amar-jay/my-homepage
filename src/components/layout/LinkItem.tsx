import { Link, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";

const LinkItem: React.FC<{
  href: string;
  path?: string;
  isCurr?: boolean;
  children: any;
  passHref?: boolean;
  [prop: string]: any;
}> = ({ href, path, children, passHref, isCurr, ...props }) => {
  const active = path === href || isCurr;
//  const inactiveColor = useColorModeValue("purple.700", "#395B64");
//  const activeColor = useColorModeValue("#000", "#E7F6F2");
  return (
    <NextLink href={href} passHref={passHref}>
      <Link
        {...props}
        paddingY={4}
        paddingX={4}
        m={0.5}
        //color={active ? activeColor : inactiveColor}
        fontWeight={active ? "bold" : "normal"}
        borderRadius="lg"
        transition="all 0.2s ease-in-out"
        _hover={{
          textDecoration: "none",
          backgroundColor: "blackAlpha.300",
        }}
      >
        {children}
      </Link>
    </NextLink>
  );
};

export default LinkItem;
