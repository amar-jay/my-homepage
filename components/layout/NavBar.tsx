import React from "react";
import {
  Container,
  Box,
  Heading,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Link,
  Flex,
  HStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useColorModeValue } from "@chakra-ui/react";
import Logo from "../Logo";

const LinkItem: React.FC<{
  [elem: string]: any;
}> = ({ href, path, children }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("purple.700", "purple.300");
  return (
    <NextLink href={href}>
      <Link
        p={3}
        color={active ? "#202023" : inactiveColor}
        fontWeight={active ? "bold" : "normal"}
        bg={active ? "glassTeal" : ""}
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

const NavBar: React.FC<{ path: string; [prop: string]: string | number }> = (
  props
) => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      zIndex={1}
      style={{ backdropFilter: "blur(10px)" }}
      {...props}
    >
      <Container
        display="flex"
        maxW="container.md"
        alignSelf="center"
        justifyContent="space-between"
      >
        <Flex align="center" mr={8}>
          <Heading
            as="h1"
            size="lg"
            fontWeight="bold"
            letterSpacing={"tighter"}
          >
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          justifyContent="space-between"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
          alignItems="center"
        >
          <LinkItem href={"/projects"} path={path}>
            Projects
          </LinkItem>
          <LinkItem href={"/posts"} path={path}>
            Posts
          </LinkItem>
          <LinkItem href={"/contact"} path={path}>
            Contact
          </LinkItem>
        </Stack>

        <Box flex={1} textAlign="right">
          <Box>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Menu"
              />
              <MenuList>
                <MenuItem as={Link}>
                  <LinkItem href="https://www.github.com/amar-jay" passHref>
                    Projects
                  </LinkItem>
                </MenuItem>
                <MenuItem as={Link}>
                  <LinkItem href={"/posts"} passHref>
                    Posts
                  </LinkItem>
                </MenuItem>
                <MenuItem as={Link}>
                  <LinkItem href={"/contact"} passHref>
                    Contact
                  </LinkItem>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default NavBar;
