import { Flex, Heading, VStack, Spacer, Image, Box, HStack, Text } from "@chakra-ui/react";
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
        <Flex
            as="heroline"
            bg="#495E57"
            margin='0'
            align='center'
            justify='center'
            maxH={450}
        >
            <HStack
                as="herocontent"
                width='70%'
                wrap={'wrap'}
                spacing={20}
                justifyContent='space-between'
            >
                <Box maxW='400px' marginTop='-20px'>
                    <VStack
                        spacing={8}
                        alignItems='baseline'
                        justify='stretch'
                    >
                        <Heading as='h1' fontFamily='markazi' textStyle='brand'>
                            Little Lemon
                            <Text fontFamily='markazi' textStyle='sentence'>
                                Chicago
                            </Text>
                        </Heading>

                        <Spacer />
                        <Text as='h3' fontFamily='karla' textStyle='sentence' noOfLines={5}>Duis non qui quis
                            nostrud ipsum sit proident. Culpa deserunt consectetur irure ex
                            aliqua consequat incididunt culpa Lorem occaecat enim deserunt cupidatat.
                        </Text>
                        <Spacer />
                        <Buttons width='300px' onClick={routeChange}>Reserve a Table</Buttons>
                    </VStack>
                </Box>

                <Image height='450' marginTop='20' src={herophoto} alt='welcome!' borderRadius='10%' />
            </HStack>

        </Flex >

    );
}

export default HeroSection;