import { Heading, Spacer, Image, Box, Text } from "@chakra-ui/react";
import herophoto from "../assets/herophoto.jpg"
import Buttons from "./Buttons";
import { useNavigate } from "react-router-dom";


const HeroSection = () => {

    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/booking`;
        navigate(path);
    }

    return (
        <Box
            bg="#495E57"
            margin='0'
            height='406px'
            width='100%'
            display='flex'
            alignItems='center'
        >
            <Box
                id='hero-section'
                width='70%'
                height='346px'
                margin='0 auto'
                display='flex'
                align-items='flex-start'
                position='relative'
                flexDirection='column'
                justifyContent='space-between'
                flexWrap='wrap'
            >

                <Box
                    spacing={8}
                    display='flex'
                    flexDirection='column'
                    height='100%'
                    width='422px'
                    justifyContent='space-between'
                    textAlign='left'
                >
                    <Heading as='h1' fontFamily='markazi' textStyle='brand'>
                        Little Lemon
                        <Text fontFamily='markazi' textStyle='sentence'>
                            Chicago
                        </Text>
                    </Heading>

                    <Spacer />
                    <Text as='h3' fontFamily='karla' textStyle='sentence' noOfLines={5}>
                        We are a family owned Mediterranean restaurant,
                        focused on traditional recipes served with a modern twist.
                    </Text>
                    <Spacer />
                    <Buttons width='300px' onClick={routeChange} aria-label='reserve a table'>Reserve a Table</Buttons>
                </Box>
                <Image
                    height='440px'
                    marginTop='0'
                    marginRight='0'
                    src={herophoto} alt='welcome!'
                    borderRadius='16px'
                />
            </Box>

        </Box >

    );
}

export default HeroSection;