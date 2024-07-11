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
          >
            <VStack>
              <p>Doormat Navigation</p> <br></br>
              <a src='/#highlights'>Home</a>
              <a src='/#about'>About</a>
              <a src='/#'>Reservations</a>
              <a src='/#'>Order Online</a>
              <a src='/#'>Login</a>
            </VStack>
            <VStack>
              <p>Contact</p><br></br>
              <li>Address</li>
              <li>Phone Number</li>
              <li>Email</li>
            </VStack>
            <VStack>
              <p>Social Media Links</p><br></br>
              <li>Instagram</li>
              <li>Facebook</li>
            </VStack>
          </HStack>
        </HStack>
      </Box>
    );
  };
  export default Footer;