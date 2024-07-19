import { Grid } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import HighlightSection from "../components/HighlightSection";


const RootLayout = () => {
    return (
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
            <HeroSection area={'hero'} />
            <HighlightSection area={'menu'} />
            <Footer area={'footer'}/>

        </Grid>
    );
}

export default RootLayout;