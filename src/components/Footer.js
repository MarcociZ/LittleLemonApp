import { Box, HStack, VStack } from "@chakra-ui/react";
import llFooter from "../images/llFooter.jpg"

const Footer = () => {
    return (
      <Box color="white" maxHeight="480px" maxWidth="915px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          color='black'
        >
          <img src={llFooter} alt='monochrome logo'/>
          <HStack
            px={16}
            py={4}
            p={16}
            justifyContent="space-between"
            fontFamily='karla'
            textStyle='footer'
          >
            <VStack>
              <p><b>Doormat Navigation</b></p> <br></br>
              <a href='/#home'>Home</a>
              <a href='/#about'>About</a>
              <a href='/#reservations'>Reservations</a>
              <a href='/#order'>Order Online</a>
              <a href='/#login'>Login</a>
            </VStack>
            <VStack>
              <p><b>Contact</b></p><br></br>
              <li>Address</li>
              <li>Phone Number</li>
              <li>Email</li>
            </VStack>
            <VStack>
              <p><b>Social Media Links</b></p><br></br>
              <li>Instagram</li>
              <li>Facebook</li>
            </VStack>
          </HStack>
        </HStack>
      </Box>
    );
  };
  export default Footer;