import { Flex, HStack } from "@chakra-ui/react";
import littleLemon from "../images/littleLemon.jpg";

const Navbar = () => {
    return (
        <Flex
            as="nav"
            bg="white"
            margin="0 auto"
            gap='10%'
            justifyContent="space-between"

        >
            <HStack
                py={8}
                spacing={16}
                justify="center"
                color='black'
                wrap='wrap'
            >
                <img
                    style={{
                        height: 55,
                        width: 210,
                        borderRadius: 10,
                    }}
                    src={littleLemon}
                    alt="logo"
                />
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
            </HStack>
        </Flex>
    );
};
export default Navbar;