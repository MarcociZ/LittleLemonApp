import { ChakraProvider } from '@chakra-ui/react';
import RootLayout from './layout/RootLayout.js'
import BookingPage from './pages/BookingPage.js';
import theme from './assets/theme.js'
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path='/' element={<RootLayout />} />
        <Route path='/booking' element={<BookingPage />} />
      </Routes>

    </ChakraProvider >
  );
}

export default App;
