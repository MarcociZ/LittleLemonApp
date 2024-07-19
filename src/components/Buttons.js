import { Box } from "@chakra-ui/react";



const Buttons = ({ children, ...buttonProps }) => {

    return (
        <Box
            as='button'
            height='40px'
            px='6'
            borderRadius='10px'
            bg='#F4CE14'
            fontFamily='karla'
            textStyle='button'
            boxShadow='2px 4px 0px 0px rgba(52, 46, 18, .5)'
            _hover={{
                bg: '#EE9972',
            }}
            _active={{
                bg: '#EE9972',
                transform: 'scale(0.98)',
                borderColor: '#bec3c9',
            }}
            _disabled={{
                bg: '#EE9972',
                color: '#F5F5F5',
            }}
            {...buttonProps}
        >
            {children}

        </Box>
    );
}

export default Buttons;