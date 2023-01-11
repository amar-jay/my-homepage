/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import GithubInfoCard from "../components/layout/GithubInfoCard";
import { IconContainer } from "../components/layout/IconContainer";
import Section from "../components/SectionMotion";
import { IData } from "./api/fetch";
import NextLink from "next/link";
import { SiGo, SiJavascript, SiTypescript, SiHtml5 } from "react-icons/si";
import { RiFileUnknowFill } from "react-icons/ri";
import { IconType } from "react-icons";
import { __prod } from "../../constants";
import { GetServerSideProps } from "next";
const Icon: React.FC<{ language: string }> = ({ language }) => {
  let Icon: IconType;
  switch (language) {
    case "TypeScript":
      Icon = SiTypescript;
      break;
    case "JavaScript":
      Icon = SiJavascript;
      break;
    case "Go":
      Icon = SiGo;
      break;
    case "HTML":
      Icon = SiHtml5;
      break;
    default:
      Icon = RiFileUnknowFill;
  }
  return <IconContainer Icon={Icon} link={"/"} size={"4xl"} />;
};
const Card: React.FC<IData["repos"][0]> = ({
  description,
  full_name,
  language,
  updated_at,
}) => {
  const DESC_COLOR = "blackAlpha.800";
  const formatted_text =
    full_name.split("/")[1].length > 20
      ? full_name.split("/")[1].slice(0, 20).concat("...")
      : full_name.split("/")[1];

  return (
    <NextLink href={"https://github.com/" + full_name}>
      <Flex
        dir={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        //backgroundColor={"white"}
        opacity={0.9}
        marginTop={7}
        paddingX={1}
        borderRadius={"lg"}
        _hover={{
          cursor: "pointer",
          backgroundColor: useColorModeValue(
            "blackAlpha.200",
            "blackAlpha.400"
          ),
          boxShadow: useColorModeValue("blackAlpha.400", "blackAlpha.200"),
        }}
      >
        <Icon language={language} />
        <Box alignItems={"left"} justifyContent={"left"} flex={1}>
          <Text fontSize={"lg"}>{formatted_text}</Text>
          {description && (
            <Text fontSize={"sm"} color={DESC_COLOR}>
              {description}
            </Text>
          )}
        </Box>
        <Text fontSize={"sm"} color={DESC_COLOR}>
          {[
            new Date(updated_at).getUTCDate(),
            new Date(updated_at).getUTCMonth(),
            new Date(updated_at).getFullYear().toString().slice(2),
          ].join("/")}
        </Text>
      </Flex>
    </NextLink>
  );
};

function projects({ data }: { data: IData }) {
  return (
    <Section delay="0.2">
      <GithubInfoCard data={data?.data ?? ({} as IData["data"])} />
      <Heading variant={"section-title"} pt={5} mb={5}>
        👨‍🏭 Works
      </Heading>
      <Container minW={{ md: "full" }} mb={10}>
        {data?.repos.map((each) => (
          <Card
            key={each.full_name}
            full_name={each.full_name}
            description={each.description}
            created_at={each.created_at}
            language={each.language}
            updated_at={each.updated_at}
          />
        ))}
      </Container>
    </Section>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=100, stale-while-revalidate=159"
  );
  const url = __prod
    ? "https://www.themanan.me/api/fetch"
    : "http://localhost:3000/api/fetch";

  const data: IData = await fetch(url).then((resp) => resp.json());

  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data },
  };
};
export default projects;
