import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme.js'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navigation />
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
