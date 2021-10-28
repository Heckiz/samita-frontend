import { Flex, Image, Text } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import { fetchWorks, useWorkId } from "../../hooks/useWorks";
import { RootObject } from "../../interfaces/works.interface";

const Details: NextPage<{ id: string }> = ({ id }) => {
  const { data, isLoading, isError } = useWorkId(id);
  return isLoading ? (
    <Text>Loading ..</Text>
  ) : isError ? (
    <Text>Error</Text>
  ) : (
    <Flex my="5">
      <Flex
        flexDirection="column"
        flex={2}
        justifyContent="space-between"
        alignItems="center"
      >
          <Text
            borderY="3px solid teal"
            borderRadius="3"
            w="60%"
            paddingY="2"
            fontSize="xl"
            textAlign="center"
          >
            {data?.title}
          </Text>
        <Image
          h="75%"
          paddingX="5"
          objectFit="cover"
          alt="image"
          src={`http://localhost:1337${data?.image.url}`}
        />
        <Flex>
          {data?.hashtags.map((hash, index) => (
            <Text fontSize="3xl" color="teal.300" key={index}>
              {hash.name}
            </Text>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Details;

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await fetchWorks();
  const paths = data.map((work: RootObject) => ({
    params: { id: "" + work.id },
  }));
  return { paths, fallback: false };
};

interface IParams extends ParsedUrlQuery {
  id: string;
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as IParams;
  return { props: { id } };
};
