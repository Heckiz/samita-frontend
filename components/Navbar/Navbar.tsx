import React from "react";
import { Flex, Grid, Text } from "@chakra-ui/layout";
const Navbar = () => {
  return (
    <Flex h="100%" w="100%">
      <Flex flex="0.7" justifyContent="center" alignItems="center">
        LOGO
      </Flex>
      <Grid 
        p="2"
        flex="1"
        display="flex"
        alignItems="center"
        justifyContent="center"
        templateColumns="repeat(4, 1fr)"
        gap={6}
        bg="blue.100"
      >
        <Text>Sobre Nosotros</Text>
        <Text>Trabajos Realizados</Text>
        <Text>Realizar Pedido</Text>
        <Text>Contacto</Text>
      </Grid>
    </Flex>
  );
};

export default Navbar;
