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
import { DataStruct } from "../../pages/api/fetch";

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
  background: "url(/images/glassmorph.jpg) center/cover no-repeat",
};
const Card: React.FC = ({}) => {
  const [data, setData] = useState<DataStruct>({
    data: { name: "", bio: "", followers: 0, following: 0 },
  });
  useEffect(() => {
    fetch("/api/fetch")
      .then((resp) => resp.json())
      .then((data) => setData(data));
  }, []);
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
          {data.data.name?.toString() ?? "unknown"}
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
            {data.data.followers?.toString() ?? "00"}
          </Stat>
          <Stat name="REPOS" color={"purple.500"}>
            {data.repos?.length?.toString() ?? "00"}
          </Stat>{" "}
          <Stat name="following" color={"#ffffff"}>
            {data.data.following?.toString() ?? "00"}
          </Stat>
        </Flex>
      </Flex>
    </Box>
  );
};
export default Card;
