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
import LinkItem from "./LinkItem";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useColorModeValue } from "@chakra-ui/react";
import Logo from "../Logo";
import ThemeToggleButton from "../Theme-Toggle-Button";

const NavBar: React.FC<{ path: string; [prop: string]: string | number }> = (
  props
) => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#2C3333")}
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
          <LinkItem href={"/"} path={path} passHref>
            Profile
          </LinkItem>
          <LinkItem href={"/projects"} path={path} passHref>
            Projects
          </LinkItem>
          <LinkItem href={"/blog"} path={path} passHref>
            Blog
          </LinkItem>{" "}
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
                    href={"/"}
                    path={path}
                    passHref
                  >
                    Profile
                  </LinkItem>
                </MenuItem>
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
                    href={"/blog"}
                    path={path}
                    height={"full"}
                    width={"full"}
                  >
                    Blog
                  </LinkItem>
                </MenuItem>{" "}
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
