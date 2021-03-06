import { Flex, Text } from "@chakra-ui/layout";
import type { NextPage } from "next";
import Head from "next/head";

const Contact: NextPage = () => {
  return (
    <Flex
      w="100%"
      h="100%"
      bg="blue.200"
      justifyContent="center"
      alignItems="center"
    >
      <Head>
        <title>Contact</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Text>Contact</Text>
    </Flex>
  );
};

export default Contact;
