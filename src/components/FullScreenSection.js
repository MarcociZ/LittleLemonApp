import * as React from "react";
import { Box, VStack } from "@chakra-ui/react";


const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <Box
      backgroundColor={boxProps.backgroundColor}
      color={isDarkBackground ? "#EDEFEE" : "black"}
    >
      <VStack maxWidth="1440px" minHeight="50vh" {...boxProps}>
        {children}
      </VStack>
    </Box>
  );
};

export default FullScreenSection;
