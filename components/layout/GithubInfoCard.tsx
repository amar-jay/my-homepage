import {
  Box,
  Center,
  Flex,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import Stat from "./Stat";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { IData } from "../../pages/api/fetch";

const innerBoxStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  width: "80%",
  textAlign: "center",
  paddingY: "15px",
  borderRadius: "15px",
  boxShadow: "md",
  textShadow: "0 0 20px black",
  fontWeight: "bold",
  fontSize: "20px",
};
const outerBoxStyles = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "20px",
  p: "5px 5px",
  // background: "url(/images/glassmorph.jpg) center/cover no-repeat",
};
const Card: React.FC<{ data: IData["data"] }> = ({ data }) => {
  return (
    <Box sx={outerBoxStyles}>
      <Flex
        sx={innerBoxStyles}
        bg={useColorModeValue("#ffffff20", "#00000030")}
        backdropFilter="blur(20px)"
      >
        <Heading color="#fffffe" variant="page-title">
          GitHub Info
        </Heading>
        <Heading as="h5" color="purple.700" textShadow={"0 0 3px 1px #ccc"}>
          {data.name?.toString() ?? "unknown"}
        </Heading>
        <Flex
          w={"100%"}
          h={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Stat
            color={useColorModeValue("blue.600", "violet")}
            name="followers"
          >
            {data.followers?.toString() ?? "--"}
          </Stat>
          <Stat name="REPOS" color={"purple.500"}>
            {data.public_repos?.toString() ?? "--"}
          </Stat>{" "}
          <Stat name="following" color={"#ffffff"}>
            {data.following?.toString() ?? "--"}
          </Stat>
        </Flex>
      </Flex>
    </Box>
  );
};
export default Card;
