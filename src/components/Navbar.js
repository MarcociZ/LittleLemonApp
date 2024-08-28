import { Flex, HStack, Hide } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import littleLemon from "../images/littleLemon.jpg";
import Hamburger from "./Hamburger";
import { Link } from "react-router-dom";
import '../styles.css'


const Navbar = () => {

    const handleClick = (anchor) => () => {
        const id = `${anchor}-section`;
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
    const [topY, setTopY] = useState(0);

    const handleScroll = () => {

        let position = window.scrollY;

        if (prevScrollPos - position < 0) {
            setTopY(-200);
        } else {
            setTopY(0);
        }
        setPrevScrollPos(position);

    };

    useEffect(() => {

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, [prevScrollPos]);


    return (
        <Flex
            id="home-section"
            minH='20vh'
            bg="white"
            alignItems='center'
            justifyContent='center'
            position="relative"
            top={0}
            left={0}
            right={0}
            transform='auto'
            translateY={`${topY}px`}
            transitionProperty="transform"
            transitionDuration=".3s"
            transitionTimingFunction="ease-in-out"

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
                <Hide below='701px'>
                    <HStack
                        as='nav'
                        className="Navbar"
                        spacing={6}
                        fontFamily='karla'
                        textStyle='nav'
                    >
                        <Link to='/' className="nav-item" onClick={handleClick("hero")} >HOME</Link>
                        <a href="/#about" className="nav-item" onClick={handleClick("hero")} >ABOUT</a>
                        <a href="/#menu" className="nav-item" onClick={handleClick("menu")} >MENU</a>
                        <Link to="/booking" className='nav-item'>RESERVATIONS</Link>
                        <a href="/#menu" className='nav-item' >ORDER ONLINE</a>
                        <a href="/#contact" className='nav-item' onClick={handleClick("contact")} >CONTACT</a>

                    </HStack>
                </Hide>
            </HStack>
        </Flex >
    );
};
export default Navbar;