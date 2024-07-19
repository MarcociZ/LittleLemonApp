import { ChakraProvider } from '@chakra-ui/react';
import RootLayout from './layout/RootLayout.js'
import Booking from './pages/Booking.js';
import theme from './assets/theme.js'
import { Route, Routes} from "react-router-dom";


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
      <Route path='/' element={<RootLayout />} />
      <Route path='/booking' element={<Booking />} />
    </Routes>
      
    </ChakraProvider >
  );
}

export default App;
