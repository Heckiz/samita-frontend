import { Box } from "@chakra-ui/layout";
import React, { FC } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import useWindowDimensions from "../../hooks/useWindowDimension";
const Layout: FC = ({ children }) => {

  const {height,width} = useWindowDimensions()
  console.log("width", width)
  console.log("height", height)
  return (
    <Box height={height} width={width}>
      <Navbar height="10%" />

      <Box height="85%">{children}</Box>

      <Footer height="5%" />
    </Box>
  );
};

export default Layout;
