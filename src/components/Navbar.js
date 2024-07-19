import { Flex, HStack, Hide } from "@chakra-ui/react";
import littleLemon from "../images/littleLemon.jpg";
import Hamburger from "./Hamburger";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <Flex
            minH='20vh'
            bg="white"
            alignItems='center'
            justifyContent='center'
        >
            <HStack
                as="nav"
                spacing={6}
                width='70%'
                wrap='wrap'
                justifyContent='space-between'
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
                <Hide above='701px'>
                    <Hamburger />
                </Hide>
                <HStack
                    as='navbar'
                    className="navbar"
                    spacing={8}
                    fontFamily='karla'
                    textStyle='nav'
                >
                    <Link to='/' className="nav-item">HOME</Link>
                    <a href="/#" >ABOUT</a>
                    <a href="/#" >MENU</a>
                    <Link to="/booking" className='nav-item'>RESERVATIONS</Link>
                    <a href="/#" >ORDER ONLINE</a>
                    <a href="/#" >LOGIN</a>

                </HStack>
                <style>
                    {
                        `   .navbar {
                                display: flex
                            }

                            @media (max-width: 700px) {
                            .navbar {
                                display: none}
                            }

                        `
                    }
                </style>
            </HStack>
        </Flex >
    );
};
export default Navbar;