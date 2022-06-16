import React from "react";
import Link from "next/link";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.div`
  font-weight: bold;
  font-size: 18px;
  display: flex;
  align-items: center;
  height: 30px;
  line-height: 28px;
  justify-content: center;

  &:hover img {
    transform: rotate(-20deg) scale(1.3);
  }
`;
const Logos: React.FC = () => {
  const FootPrintImg = `/images/bulb${useColorModeValue("", "-dark")}.svg`;
  return (
    <Link href="/">
      <a>
        <LogoBox>
          {<img src={FootPrintImg} alt="" style={{ width: "16px" }} />}
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
