import { extendTheme } from '@chakra-ui/react'
import '@fontsource/markazi-text'
import '@fontsource/karla'

const theme = extendTheme({
    fonts: {
      karla: `'Karla', sans-serif`,
      markazi: `'Markazi', sans-serif`,
    },
    textStyles: {
        nav: {
             fontSize: '18px',
             fontWeight: 'bold',
             color: '#495E57',
        },
        brand: {
            fontSize: '64px',
            fontWeight: 'medium',
            color: '#F4CE14',
        },
        sentence: {
            fontSize: '24px',
            fontWeight: 'regular',
            color: '#EDEFEE',
            lineHeight: '110%',
        },
        button: {
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#333333',
        },
        footer: {
            fontSize: '20px',
            fontWeight: 'regular',
            color: '#495E57',
        }
    }
  })
  
  export default theme