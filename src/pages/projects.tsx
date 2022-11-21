/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import GithubInfoCard from "../components/layout/GithubInfoCard";
import {IconContainer} from '../components/layout/ContactContainer'
import Section from "../components/SectionMotion";
import { IData } from "./api/fetch";
import NextLink from "next/link";
import { SiGo,SiJavascript, SiTypescript, SiHtml5 } from "react-icons/si"
import {RiFileUnknowFill} from 'react-icons/ri'
import { IconType } from 'react-icons';
import { __prod } from "../../constants";
import { GetServerSideProps } from 'next';
const Icon:React.FC<{language:string}> = ({language}) => {
  let Icon: IconType;
  switch (language) {
    case "TypeScript":
    Icon=SiTypescript;
    break;
    case "JavaScript":
    Icon=SiJavascript;
    break;
    case "Go":
    Icon = SiGo
    break;
    case "HTML":
    Icon = SiHtml5
    break;
    default:
    Icon = RiFileUnknowFill
 }
  return <IconContainer Icon={Icon} link={"/"} size={'4xl'}/>
}
const Card: React.FC<IData["repos"][0]> = ({
  description,
  full_name,
  language,
  updated_at,
}) => {
  const DESC_COLOR = "blackAlpha.800";
  const formatted_text = full_name.split("/")[1].length > 10 ? full_name.split("/")[1].slice(0,10).concat("..."):full_name.split("/")[1];

return (
    <NextLink href={"https://github.com/" + full_name} >
  <Flex
  dir={"row"}
    justifyContent={"space-between"}
    alignItems={"center"}
    backgroundColor={"blackAlpha.300"}
    marginTop={7}
    paddingX={3}
    borderRadius={"lg"}
    _hover={{
      cursor: "pointer",
      backgroundColor: "blackAlpha.500",
      boxShadow: "#ccc",
    }}
  >
      <Icon language={language}/>
      <Box alignItems={'left'} justifyContent={'left'} flex={1}>
        <Text fontSize={"2xl"}>{formatted_text}</Text>
        <Text fontSize={"sm"} color={DESC_COLOR}>{description}</Text>
      </Box>
        <Text fontSize={"sm"} color={DESC_COLOR}>
          Last Updated:{" "}
          {[
            new Date(updated_at).getUTCDate(),
            new Date(updated_at).getUTCMonth(),
            new Date(updated_at).getFullYear(),
          ].join("-")}
        </Text>
      </Flex>
    </NextLink>
);
}

function projects({data}: {data: IData}) {

  return (
    <Section delay="0.2">
      <GithubInfoCard data={data?.data ?? ({} as IData["data"])} />
      <Heading variant={"section-title"} pt={5}>
        👨‍🏭 Works
      </Heading>
      <Container minW={{ md: "full" }}>
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

export const getServerSideProps:GetServerSideProps = async ({req, res }) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=100, stale-while-revalidate=159'
  )  
  const url = __prod ? "https://www.themanan.me/api/fetch" : "http://localhost:3000/api/fetch"

  const data:IData = await fetch(url).then((resp) => resp.json());   

  return {
    props: { data },
  }
}
export default projects;
