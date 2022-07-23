import React from "react";
import Link from "next/link";
import { Text, useColorModeValue, Box } from "@chakra-ui/react";
import styled from "@emotion/styled";
import NextImage from "next/image";

const LogoBox = styled.div`
  font-weight: bold;
  font-size: 18px;
  display: flex;
  align-items: center;
  height: 30px;
  line-height: 28px;
  justify-content: center;

  &:hover img {
    transform: rotate(-10deg) scale(1.05);
  }
`;
const Logos: React.FC = () => {
  const FootPrintImg = `/images/bulb${useColorModeValue(
    "-light",
    "-dark"
  )}.svg`;
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Box
            position="relative"
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="30px"
            width="30px"
            padding="10px 10px 10px 10px"
          >
            <NextImage src={FootPrintImg} alt="" layout="fill" />
          </Box>
          <Text
            color={useColorModeValue("purple.700", "purple.300")}
            fontFamily="M PLUS Rounded 1c"
            fontWeight="bold"
            ml={3}
          >
            Amar Jay
          </Text>
        </LogoBox>
      </a>
    </Link>
  );
};
export default Logos;
