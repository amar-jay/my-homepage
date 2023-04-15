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
import { colors } from "../../../libs/theme";

interface Item {
    name: string;
    href: string;
}
const items: Item[] = [
{
    name: "Profile",
    href: "/"
},
{
    name: "Projects",
    href: "/projects"
},
{
    name: "Blog",
    href: "https://blog.themanan.me/blog"
},
{
    name: "About",
    href: "https://linktr.ee/amarjay"
},
]
const NavBar: React.FC<{ path: string;[prop: string]: string | number }> = (
  props
) => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", colors.bgDark + "40")}
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
        {
            items.slice(0, items.length-1).map(({name, href}: Item) => (
          <LinkItem key={name} href={href} path={path} passHref>
          {name}
          </LinkItem>
            ))
        }
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

        {
            items.map(({name, href}: Item) => (
              <MenuItem key={name} href={href} path={path} passHref>
                  <LinkItem
                    height={"full"}
                    width={"full"}
                    href={href}
                    path={path}
                    passHref
                  >
                   {name} 
                  </LinkItem>
              </MenuItem>
            ))
        }
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default NavBar;
