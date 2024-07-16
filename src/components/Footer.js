import { Box, Flex, HStack, VStack } from "@chakra-ui/react";
import llFooter from "../images/llFooter.jpg"

const Footer = () => {
  return (
    <Flex
      as="footer"
      bg="white"
      p='10'
      gap='10%'
      margin="0 auto"
    >
      <HStack
        py={8}
        spacing={16}
        fontFamily='Karla'
        textStyle='footer'
        wrap='wrap-reverse'

      >
        <Box w='157' h='287' >
          <img src={llFooter} alt='lemon logo' />
        </Box>
        <Box
          w='157'
          h='287'
        >
          <p><b>Doormat Navigation</b></p> <br></br>
          <VStack
            alignItems='left'
          >
            <a href='/#home'>Home</a>
            <a href='/#about'>About</a>
            <a href='/#reservations'>Reservations</a>
            <a href='/#order'>Order Online</a>
            <a href='/#login'>Login</a>
          </VStack>
        </Box>
        <Box
          w='157'
          h='287'
        >
          <p><b>Contact</b></p><br></br>
          <li>Address</li>
          <li>Phone Number</li>
          <li>Email</li>
        </Box>
        <Box
          w='157'
          h='287'
        >
          <p><b>Social Media Links</b></p><br></br>
          <li>Instagram</li>
          <li>Facebook</li>
        </Box>
      </HStack>
    </Flex>
  );
};
export default Footer;