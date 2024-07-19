import { Box, Heading, HStack, VStack } from "@chakra-ui/react";
import CardMenu from "./CardMenu";
import Buttons from "./Buttons";

const HighlightSection = () => {

    const menus = [
        {
            title: "Greek Salad",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            getImageSrc: () => require("../assets/photo1.jpg"),
            price: "$ 12.99",
        },
        {
            title: "Brucheta",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            getImageSrc: () => require("../assets/photo2.jpg"),
            price: "$ 5.99",
        },
        {
            title: "Lemon Dessert",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            getImageSrc: () => require("../assets//photo3.jpg"),
            price: "$ 5.00",
        },
    ];

    return (

        <VStack
        >

            <HStack
                minH='20vh'
                width='70%'
                display='flex'
                marginBottom='4px'
                spacing={20}
                alignItems='end'
                justifyContent='space-between'
            >
                <Box
                    justifySelf='end'

                >
                    <Heading
                        as='highlight'
                        fontFamily='markazi'
                        textStyle='brand'
                        color='#000000'
                        p='10px'
                    >
                        This Week Specials!
                    </Heading>
                </Box>
                <Buttons p='10px' width='200px' h='50px'>Online Menu</Buttons>
            </HStack>

            <Box
                width='70%'
                display="flex"
                JustifyItems='stretch'
                justifyContent='space-between'

            >
                {menus.map((menu) => (

                    <CardMenu
                        key={menu.title}
                        title={menu.title}
                        description={menu.description}
                        imageSrc={menu.getImageSrc()}
                        price={menu.price}
                    />
                ))
                }

            </Box>
        </VStack >

    );

}
export default HighlightSection;