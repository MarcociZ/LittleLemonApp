import { Heading, Box, Text, VStack } from "@chakra-ui/react";

const SectionLabel = ({ children, ...labelProps }) => {

    return (
        <Box
            display='flex'
            bg="#495E57"
            margin='20'
            width='100%'
            alignItems='center'
            justifyContent='center'
        >
                <VStack
                    spacing={2}
                    flexWrap={'wrap'}
                    {...labelProps}
                >
                    <Heading as='h1' fontFamily='markazi' textStyle='brand'>
                        {children}
                    </Heading>
                    <Text fontFamily='karla' textStyle='sentence'> For more information please call us to: </Text>

                    <Text fontFamily='karla' textStyle='sentence'> +1 800 800 80000 </Text>
               </VStack>
        </Box>

    );
}

export default SectionLabel;