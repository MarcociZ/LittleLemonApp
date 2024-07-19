import { Grid } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Booking = () => {
    return(
        <Grid
            templateAreas={`'nav'
                             'hero'
                             'menu'
                             'rating'
                             'about'
                             'footer'`
                         }
            gridTemplateRows={'1fr'}
            gridTemplateColumns={'1fr'}
        >

            <Navbar area={'nav'}/>
            <Footer area={'footer'}/>

        </Grid>

    );
}

export default Booking;