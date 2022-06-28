import { Flex, Heading, useColorModeValue } from "@chakra-ui/react";

const Stat: React.FC<{ color: string; children: string; name: string }> = ({
  color,
  name,
  children,
}) => {
  return (
    <Flex
      color={color}
      h="50%"
      w="30%"
      alignItems={"center"}
      justifyContent="center"
      flexDir={"column"}
    >
      <Heading fontSize={"45px"}>{children}</Heading>
      <p style={{ fontSize: "16px" }}>{name}</p>
    </Flex>
  );
};

export default Stat;
