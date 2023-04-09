import { Box, Text, TypographyProps } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { IconType } from "react-icons";

export const IconContainer: React.FC<{
  Icon?: IconType;
  text?: string;
  isRow?: boolean;
  size?: TypographyProps["fontSize"];
  spaceBetween?: boolean;
  alignItems?: "left" | "right" | "center";
  link: string;
}> = ({ Icon, text, isRow, alignItems,  link, size, spaceBetween }) => {
  return (
    <NextLink href={link}>
      <Box
        display={"flex"}
        alignItems={alignItems || "center"}
        justifyContent={spaceBetween ? "space-between" : "center"}
        paddingX={spaceBetween ? "10" : 2}
        alignContent={alignItems || "center"}
        flexDirection={isRow ? "row" : "column"}
        py={2}
        borderRadius={"md"}
        fontSize={size || "xl"}
        margin={{ base: 2, md: 1 }}
        _hover={{
          cursor: "pointer",
          backgroundColor: "blackAlpha.300",
        }}
      >
        {Icon && <Icon /> }
        {text && (
          <Text
            ml={isRow ? 3 : 0}
            mt={isRow ? 0 : 3}
            textAlign={"center"}
            mr={spaceBetween ? "10" : "0"}
          >
            {text.toLowerCase()}
          </Text>
        )}
      </Box>
    </NextLink>
  );
};
