import {Box, HStack } from "@chakra-ui/react";
import littleLemon from  "../images/littleLemon.jpg";


const Navigation = () => {
    return (
        <Box color="white" maxWidth='915px' maxHeight='130px' margin="0 auto">
            <HStack
                py={8}
                justifyContent="space-between"
                alignItems="center"
                color='black'
            >
                <img style={{
                    height: 55,
                    width: 210,
                    borderRadius: 10,
                     }}
                    src={littleLemon}
                    alt="logo"
                />
                <nav>
                    <HStack
                        spacing={8}
                        fontFamily='karla'
                        textStyle='nav'
                    >
                        <a href="/#highlights">HOME</a>
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