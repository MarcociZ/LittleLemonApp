import {Box, HStack } from "@chakra-ui/react";
import littleLemon from "../images/littleLemon.jpg"


const Navigation = () => {
    return (
        <Box color="white" maxWidth="915px" margin="0 auto">
            <HStack
                px={16}
                py={4}
                justifyContent="space-between"
                alignItems="center"
                color='black'
            >
                <img scr={littleLemon} alt="logo" />
                <nav>
                    <HStack spacing={8}>
                        <a href="/#highlights" class="active">HOME</a>
                        <a href="/#" >ABOUT</a>
                        <a href="/#" >MENU</a>
                        <a href="/#" >RESERVATIONS</a>
                        <a href="/#" >ORDER ONLINE</a>
                        <a href="/#" >LOGIN</a>
                    </HStack>
                </nav>
            </HStack>
        </Box>
    );
};
export default Navigation;