import { Heading, Box, VStack } from "@chakra-ui/react";
import { useLocation, useNavigate } from 'react-router-dom';
import SectionLabel from "./SectionLabel";
import Buttons from "./Buttons";
import littlelemon from "../images/littleLemon.jpg";


const BookingConfirm = () => {

    const { state } = useLocation();

    const { date, time, guests, occasion } = state;

    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/`;
        navigate(path);
    }



    return (

        <Box>
            <VStack>
                <img
                    style={{
                        height: 55,
                        width: 210,
                        borderRadius: 10,
                    }}
                    src={littlelemon}
                    alt="logo"
                />
                <SectionLabel>Reserve a table</SectionLabel>
                <Heading as='h1' fontFamily='markazi' textStyle='brand'>
                    You have successfully reserved your table!
                </Heading>
            </VStack>

            <VStack
                justifyContent='center'
                fontFamily='karla'
                textStyle='sentence'
                color='#495E57'
            >
                <p>Date:  {date} </p>
                <p>Time:  {time} </p>
                <p>Guests:  {guests} </p>
                <p>Occasion:  {occasion} </p>
                <Buttons onClick={routeChange}>Home</Buttons>

            </VStack>

        </Box>

    );
};
export default BookingConfirm;