import { Button, Flex, Heading, VStack, Spacer, Image, Box, HStack, Text } from "@chakra-ui/react";
import herophoto from "../assets/herophoto.jpg"


const HeroSection = () => {
    return (
        <Flex
            as="hero"
            bg="#495E57"
            margin='0 0 0 0'
            align={'center'}
            justify='center'
            maxH={477}
        >
            <HStack
                px={4}
                spacing={16}
                wrap={'wrap'}
            >
                <Box maxW='439' maxH='436' marginTop='0'>
                    <VStack spacing={6} alignItems='start' justifyContent='space-between'>

                        <Heading as='h1' fontFamily='markazi' textStyle='brand'>Little Lemon
                            <Heading as='h2' fontFamily='markazi' textStyle='sentence'>Chicago</Heading>
                        </Heading>
                        <Spacer />
                        <Text as='p' fontFamily='karla' textStyle='sentence' noOfLines={5}>Duis non qui quis
                            nostrud ipsum sit proident. Culpa deserunt consectetur irure ex
                            aliqua consequat incididunt culpa Lorem occaecat enim deserunt cupidatat.
                        </Text>
                        <Button fontFamily='karla' textStyle='buttom'>Reserve a Table</Button>

                    </VStack>
                </Box>

                <Box maxW='420' maxH='506' marginTop='20'>
                    <Image src={herophoto} alt='welcome!' borderRadius='10%' />
                </Box>
            </HStack>

        </Flex >

    );
}

export default HeroSection;