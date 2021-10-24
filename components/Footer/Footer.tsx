import { Flex, Text } from "@chakra-ui/layout";
import React, { FC } from "react";

const Footer: FC = () => {
  return (
    <Flex
      bg="tomato"
      justifyContent="center"
      alignItems="center"
      height="5vh"
      w="100%"
      position="fixed"
      bottom="0"
    >
      <Text>Footer</Text>
    </Flex>
  );
};

export default Footer;
