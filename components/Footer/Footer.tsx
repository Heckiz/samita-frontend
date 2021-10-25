import { Flex, Text } from "@chakra-ui/layout";
import React, { FC } from "react";

const Footer: FC<{ height: string }> = ({ height }) => {
  return (
    <Flex
      h={height}
      w="100%"
      bg="tomato"
      justifyContent="center"
      alignItems="center"
      position="fixed"
      bottom="0"
    >
      <Text>Footer</Text>
    </Flex>
  );
};

export default Footer;
