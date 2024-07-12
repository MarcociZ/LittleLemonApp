import { VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection"


const Hero = () => {
    return (<FullScreenSection
    justifyContent="center"
    alignItems="center"
    backgroundColor="#495E57"
    isDarkBackground
    id="home"
   >
    <VStack>
        <p>Little Lemon</p>
    </VStack>
    <VStack>

    </VStack>

   </FullScreenSection>
   );
};
export default Hero;