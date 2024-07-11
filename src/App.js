import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
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
