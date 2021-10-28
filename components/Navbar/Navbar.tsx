import React, { FC, useState } from "react";
import { Flex, Grid, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import Link from "next/link";

const Navbar: FC<{ height: string }> = ({ height }) => {
  const [menuActive, setMenuActive] = useState<boolean>(false);

  return (
    <Flex
      transition="all 1s"
      position="relative"
      flexDirection={{ base: "column", lg: "row" }}
      height={menuActive ? "100vh" : height}
      w="100%"
      bg="blue.100"
    >
      <Flex
        flex={{ base: menuActive ? "0.4" : "1", lg: "0.5" }}
        justifyContent="center"
        alignItems="center"
      >
        LOGO
      </Flex>

      <Grid
        display="flex"
        p="2"
        w="100vw"
        flexDirection={{ base: "column", lg: "row" }}
        position={{ base: "absolute", lg: "initial" }}
        bottom={{ base: "40%", lg: "0" }}
        opacity={{ base: menuActive ? 1 : 0, lg: 1 }}
        transition="all 1s"
        flex="1"
        alignItems="center"
        justifyContent="center"
        templateColumns="repeat(4, 1fr)"
        gap={6}
        bg="blue.100"
      >
        <Link href="/" passHref>
          <Text>Inicio</Text>
        </Link>
        <Link href="/about" passHref>
          <Text>Sobre Nosotros</Text>
        </Link>
        <Link href="/works" passHref>
          <Text>Trabajos Realizados</Text>
        </Link>
        <Link href="/contact" passHref>
          <Text>Contacto</Text>
        </Link>
      </Grid>

      <Button
        display={{ base: "block", lg: "none" }}
        bg="red.100"
        position="absolute"
        right="2vw"
        top="2vh"
        onClick={() => setMenuActive(!menuActive)}
      >
        <Text>Menu</Text>
      </Button>
    </Flex>
  );
};

export default Navbar;
