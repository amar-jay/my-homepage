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
} from "@chakra-ui/react";
import NextLink from "next/link";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useColorModeValue } from "@chakra-ui/react";
import Logo from "../Logo";
import ThemeToggleButton from "../Theme-Toggle-Button";

const LinkItem: React.FC<{
  href: string;
  path: string;
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
          // justifyContent="space-between"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
          alignItems="center"
        >
          <LinkItem href={"/projects"} path={path} passHref>
            Projects
          </LinkItem>
          <LinkItem href={"/"} path={path} passHref>
            Profile
          </LinkItem>
          <LinkItem href={"/contact"} path={path} passHref>
            Contact
          </LinkItem>
        </Stack>

        <Box
          flex={1}
          justifyContent={"flex-end"}
          alignItems={"center"}
          flexDirection={"row"}
          display="flex"
        >
          <ThemeToggleButton />
          <Box
            display={{
              base: "block",
              md: "none",
            }}
          >
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Outline"
              />
              <MenuList p={"6px"}>
                <MenuItem borderRadius={"10px"} padding={0}>
                  <LinkItem
                    height={"full"}
                    width={"full"}
                    href="/projects"
                    path={path}
                    passHref
                  >
                    Projects
                  </LinkItem>
                </MenuItem>
                <MenuItem
                  // as={Link}
                  borderRadius={"10px"}
                  padding={0}
                >
                  <LinkItem
                    height={"full"}
                    width={"full"}
                    href={"/"}
                    path={path}
                    passHref
                  >
                    Profile
                  </LinkItem>
                </MenuItem>
                <MenuItem borderRadius={"10px"} padding={0}>
                  <LinkItem
                    href={"/contact"}
                    path={path}
                    height={"full"}
                    width={"full"}
                  >
                    Contact
                  </LinkItem>
                </MenuItem>
                <MenuItem borderRadius={"10px"} padding={0}>
                  <LinkItem
                    href={"/books"}
                    path={path}
                    height={"full"}
                    width={"full"}
                  >
                    Books
                  </LinkItem>
                </MenuItem>
                <MenuItem borderRadius={"10px"} padding={0}>
                  <LinkItem
                    href={"/photography"}
                    path={path}
                    height={"full"}
                    width={"full"}
                  >
                    Photography
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
