import { Box, HStack, VStack, Text, Icon, Image } from "@chakra-ui/react";



const CardMenu = ({ title, description, imageSrc, price }) => {

    const border = 15;

    return (
        <Box
            display='flex'
            style={{
                background: "#EDEFEE",
                borderRadius: border,
                margin: 4,
            }}
            maxW='280px'
            minH='480px'
        >
            <VStack
                spacing={4}
                align='stretch'
            >
                <Image
                    src={imageSrc}
                    style={{ borderRadius: border }}
                />
                <HStack m='2' justifyContent='space-between'>
                    <Text as='cardHeading' fontFamily='karla' textStyle='card'>{title}</Text>
                    <Text as='price' fontFamily='karla' textStyle='card' color='#FB0707'>{price}</Text>
                </HStack>
                <Text m='2' as='description' fontFamily='karla' textStyle='card2' text-align='justify'>{description} </Text>
                <HStack m='2' spacing='4'>
                    <Text fontFamily='karla' textStyle='card' >Order a Delivery</Text>
                    <Icon name='arrow-right' />
                </HStack>
            </VStack>

        </Box >

    );
}

export default CardMenu;