import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/layout";
import React, { FC } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Layout: FC = ({ children }) => {
  return (
    <SimpleGrid>
      <Box h="10vh">
        <Navbar />
      </Box>
      <Box h="85vh" border="2px solid black">
        {children}
      </Box>
      <Box h="5vh">
        <Footer />
      </Box>
    </SimpleGrid>
  );
};

export default Layout;
