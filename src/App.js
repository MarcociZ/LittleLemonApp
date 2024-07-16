import { ChakraProvider } from '@chakra-ui/react';
import RootLayout from  './layout/RootLayout.js'
import theme from './assets/theme.js'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <RootLayout />
      
    </ChakraProvider>
  );
}

export default App;
