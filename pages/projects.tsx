/* eslint-disable react-hooks/rules-of-hooks */
import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import GithubInfoCard from "../components/layout/GithubInfoCard";
import Section from "../components/SectionMotion";
import { IData } from "./api/fetch";
import NextLink from 'next/link'

const Card: React.FC<IData["repos"][0]> = ({
  created_at,
  description,
  full_name,
  language,
  updated_at,
}) => (
  <Flex
    dir={"row"}
    justifyContent={'space-between'}
    backgroundColor={"blackAlpha.300"}
    padding={5}
    marginTop={7}
    borderRadius={'lg'}
    _hover={{ cursor: "pointer", backgroundColor: "blackAlpha.500", boxShadow: '#ccc' }}
  >
    <Box>
      <NextLink href={'https://github.com/'+full_name} >
      <Text fontSize={'3xl'}>{full_name.split('/')[1]}</Text>
      </NextLink>
      <Text fontSize={'md'}>{description}</Text>
      <Text fontSize={'md'} color={'messenger.500'}>{language}</Text>
    </Box>
    <Box>
      <Text>Created: {[new Date(created_at).getUTCDate(), new Date(created_at).getMonth(), new Date(created_at).getFullYear()].join("-")}</Text>
      <Text>Last Updated: {[new Date(updated_at).getUTCDate(), new Date(updated_at).getUTCMonth(), new Date(updated_at).getFullYear()].join("-")}</Text>
    </Box>
  </Flex>
);

function projects() {
  const [data, setData] = useState<IData>();
  useEffect(() => {
    fetch("/api/fetch")
      .then((resp) => resp.json())
      .then((data) => setData(data));
  }, []);
  return (
    <Section delay="0.2">
      <GithubInfoCard data={data?.data??{} as IData["data"]} />
      <Heading variant={"section-title"} pt={5}>
        👨‍🏭 Works
      </Heading>
      <Container minW={{md: "full"}}>
        {data?.repos.slice(0,7).map((each) => (
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

export default projects;
